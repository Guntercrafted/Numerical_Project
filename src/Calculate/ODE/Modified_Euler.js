import React, { Component } from 'react';
import { Card, Input, Button, Table } from 'antd';
import '../../screen.css';
import 'antd/dist/antd.css';
import { func } from '../../services/Services';
import Graph from '../../components/Graph';

const InputStyle = {
    background: "#1890ff",
    color: "white",
    fontWeight: "bold",
    fontSize: "24px"

};
var dataInTable;
const columns = [
    {
        title: "x",
        dataIndex: "x",
        key: "x"
    },
    {
        title: "y",
        key: "y",
        dataIndex: "y"
    }
];
var X = [], yE = [];
class Modified_Euler extends Component {
    constructor() {
        super();
        this.state = {
            fx: "",
            start: 0,
            finish: 0,
            x0: 0,
            y0: 0,
            h: 0,
            exactEquation: "",
            showOutputCard: false,
            showGraph: false
        }
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });

    }
    euler(x, y, h) {
        return y + func(this.state.fx, x, y) * h;
    }
    modified_euler(start, finish, x0, y0, h) {
        X = []
        var pointX = []
        var pointfx = []
        yE = []
        dataInTable = []

        //create x and fx
        for (var i = 0; i <= finish; i++) {
            pointX.push(parseFloat(x0) + i * parseFloat(h))
            pointfx.push(func(this.state.fx, parseFloat(x0) + i * parseFloat(h)))
        }
        for (i = 1; i < finish; i++) {
            var y_half = this.euler(pointX[i - 1], pointfx[i - 1], h / 2)
            var x_half = (pointX[i] + pointX[i - 1]) / 2
            pointfx[i] = pointfx[i - 1] + func(this.state.fx, x_half, y_half) * h;
            yE.push(pointfx[i])
            X.push(i)

        }
        this.createTable(X, yE)
        this.setState({
            showOutputCard: true,
            showGraph: true
        })
    }


    createTable(x, y) {
        dataInTable = []
        for (var i = 0; i < x.length; i++) {
            dataInTable.push({
                x: x[i],
                y: y[i]
            });
        }

    }
    render() {
        return (
            <div style={{ padding: "30px" }}>
                <h2 style={{ color: "black", fontWeight: "bold" }}>Modified Euler's Method</h2>
                <div className="row">
                    <div className="col">
                        <Card
                            bordered={true}
                            style={{ background: "gray", borderRadius:"15px", color: "#FFFFFFFF" }}
                            onChange={this.handleChange}
                            id="inputCard"
                        >
                            <h2>f(x,y)</h2><Input size="large" name="fx" style={InputStyle}></Input>
                            <h2>X<sub>0</sub></h2><Input size="large" name="x0" style={InputStyle}></Input>
                            <h2>Y<sub>0</sub></h2><Input size="large" name="y0" style={InputStyle}></Input>
                            <h2>Start</h2><Input size="large" name="start" style={InputStyle}></Input>
                            <h2>Finish</h2><Input size="large" name="finish" style={InputStyle}></Input>
                            <h2>H</h2><Input size="large" name="h" style={InputStyle}></Input><br /><br />
                            <h2>Exact Equation</h2><Input size="large" name="exactEquation" style={InputStyle}></Input><br /><br />
                            <Button id="submit_button" onClick={
                                () => this.modified_euler(parseFloat(this.state.start), parseFloat(this.state.finish), parseFloat(this.state.x0), parseFloat(this.state.y0), parseFloat(this.state.h))
                            }
                                style={{ background: "#4caf50", color: "white", fontSize: "20px" }}>Submit</Button>

                        </Card>
                    </div>
                    <div className="col">
                        {this.state.showGraph && <Graph fx={this.state.exactEquation} title="Modified Euler" />}
                    </div>
                </div>
                {this.state.showOutputCard &&
                    <Card
                        title={"Output"}
                        bordered={true}
                        style={{ background: "#2196f3", color: "#FFFFFFFF" }}
                        id="outputCard"
                    >
                        <Table columns={columns} bordered={true} dataSource={dataInTable} bodyStyle={{ fontWeight: "bold", fontSize: "18px", color: "black" }}
                        ></Table>
                    </Card>
                }
            </div>
        );
    }
}
export default Modified_Euler;