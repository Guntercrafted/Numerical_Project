import React, { Component } from 'react'
import { Card, Input, Button, Table } from 'antd';
import '../../screen.css';
import 'antd/dist/antd.css';
import { inv, multiply, sum } from 'mathjs';

const InputStyle = {
    background: "#1890ff",
    color: "white",
    fontWeight: "bold",
    fontSize: "24px"

};
var columns = [
    {
        title: "No.",
        dataIndex: "no",
        key: "no"
    },
    {
        title: "X",
        dataIndex: "x",
        key: "x"
    },
    {
        title: "Y",
        dataIndex: "y",
        key: "y"
    }
];
var x, y, tableTag, answer

class Linear extends Component {

    constructor() {
        super();
        x = []
        y = []

        tableTag = []
        this.state = {
            nPoints: 0,
            m: 0,
            interpolatePoint: 0,
            showInputForm: true,
            showTableInput: false,
            showOutputCard: false
        }
        this.handleChange = this.handleChange.bind(this);


    }
    createTableInput(n) {
        for (var i = 1; i <= n; i++) {
            x.push(<Input style={{
                width: "70%",
                height: "50%",
                backgroundColor: "black",
                marginInlineEnd: "5%",
                marginBlockEnd: "5%",
                color: "white",
                fontSize: "18px",
                fontWeight: "bold",
                justifyContent: "center"
            }}
                id={"x" + i} key={"x" + i} placeholder={"x" + i} />);
            y.push(<Input style={{
                width: "100%",
                height: "50%",
                backgroundColor: "black",
                marginInlineEnd: "5%",
                marginBlockEnd: "5%",
                color: "white",
                fontSize: "18px",
                fontWeight: "bold"
            }}
                id={"y" + i} key={"y" + i} placeholder={"y" + i} />);
            tableTag.push({
                no: i,
                x: x[i - 1],
                y: y[i - 1]
            })

        }

        this.setState({
            showInputForm: false,
            showTableInput: true
        })
    }
    initialValue(n) {
        x = new Array(n + 1)
        y = []
        for (var i = 1; i <= n; i++) {
            x[i] = parseInt(document.getElementById("x" + i).value);

        }
        for (i = 1; i <= n; i++) {
            y[i] = parseFloat(document.getElementById("y" + i).value);
        }
    }
    linear(n) {
        var matrixX = [2], matrixY = [2], exponent = 0
        for (var i = 0; i < 2; i++) {
            matrixX[i] = []
            for (var j = 0; j < 2; j++) {
                if (i === 0 && j === 0) {
                    matrixX[i][j] = n
                }
                else if (i === 0 && j === 1) {
                    matrixX[i][j] = this.summation(x, 1)
                }
                else {
                    matrixX[i][j] = this.summation(x, exponent + j)
                }
            }
            exponent++
        }
        matrixY[0] = sum(y)
        matrixY[1] = this.summationOfTwo(x, y)
        matrixX = inv(matrixX)
        answer = JSON.stringify(multiply(matrixX, matrixY))

        this.setState({
            showOutputCard: true
        })
    }
    summation(A, exponent) {
        var sum = 0
        for (var i = 1; i < A.length; i++) {
            sum += Math.pow(A[i], exponent)
        }
        return sum
    }
    summationOfTwo(A, B) {
        var sum = 0
        for (var i = 1; i < A.length; i++) {
            sum += A[i] * B[i]
        }
        return sum
    }
    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }
    render() {
        return (
            <div style={{ background: "#FFFF", padding: "30px" }}>
                <h2 style={{ color: "black", fontWeight: "bold" }}>Linear Regression</h2>
                <div className="row">
                    <div className="col">
                        <Card
                            bordered={true}
                            style={{ background: "gray", borderRadius:"15px", color: "#FFFFFFFF" }}
                            onChange={this.handleChange}
                        >
                            {this.state.showInputForm &&
                                <div>
                                    <h2>Number of points(n)</h2><Input size="large" name="nPoints" style={InputStyle}></Input>
                                    <Button id="dimention_button" onClick={
                                        () => this.createTableInput(parseInt(this.state.nPoints), parseInt(this.state.m))}
                                        style={{ background: "#4caf50", color: "white", fontSize: "20px" }}>
                                        Submit<br></br>
                                    </Button>
                                </div>
                            }
                            {this.state.showTableInput &&
                                <div>
                                    <Table columns={columns} dataSource={tableTag} pagination={false} bordered={true} bodyStyle={{ fontWeight: "bold", fontSize: "18px", color: "white", overflowY: "scroll", minWidth: 120, maxHeight: 300 }}></Table>
                                    <Button
                                        id="matrix_button"
                                        style={{ background: "blue", color: "white", fontSize: "20px" }}
                                        onClick={() => {
                                            this.initialValue(parseInt(this.state.nPoints));
                                            this.linear(parseInt(this.state.nPoints))
                                        }}
                                    >
                                        Submit
                                </Button>
                                </div>
                            }

                        </Card>
                    </div>
                    <div className="col">
                        {this.state.showOutputCard &&
                            <Card
                                title={"Output"}
                                bordered={true}
                                style={{ border: "2px solid black", background: "rgb(61, 104, 61) none repeat scroll 0% 0%", color: "white" }}
                            >
                                <p style={{ fontSize: "24px", fontWeight: "bold" }}>x = {JSON.stringify(answer)}</p>
                            </Card>
                        }
                    </div>






                </div>


            </div>
        );
    }
}
export default Linear;