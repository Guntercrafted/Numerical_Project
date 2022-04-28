import React, { Component } from 'react';
import { Card, Input, Button } from 'antd';
import '../../screen.css';
import 'antd/dist/antd.css';
import { func, funcDiffDegreeN } from '../../services/Services';

const InputStyle = {
    background: "#1890ff",
    color: "white",
    fontWeight: "bold",
    fontSize: "24px"

};
var y, error, exact;
class Forwardh2 extends Component {
    constructor() {
        super();
        this.state = {
            fx: "",
            x: 0,
            h: 0,
            degree: 0,
            showOutputCard: false,
        }
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });

    }
    forwardh2(x, h, degree) {
        switch (degree) {
            case 1:
                y = (-func(this.state.fx, x + (2 * h)) + 4 * func(this.state.fx, x + (1 * h)) - 3 * func(this.state.fx, x)) / (2 * h)
                break;
            case 2:
                y = (-func(this.state.fx, x + (3 * h)) + 4 * func(this.state.fx, x + (2 * h)) - 5 * func(this.state.fx, x + (1 * h)) + 2 * func(this.state.fx, x)) / Math.pow(h, 2)
                break;
            case 3:
                y = (-3 * func(this.state.fx, x + (4 * h)) + 14 * func(this.state.fx, x + (3 * h)) - 24 * func(this.state.fx, x + (2 * h)) + 18 * func(this.state.fx, x + (1 * h)) - 5 * func(this.state.fx, x)) / (2 * Math.pow(h, 3))
                break;
            default:
                y = (-2 * func(this.state.fx, x + (5 * h)) + 11 * func(this.state.fx, x + (4 * h)) - 24 * func(this.state.fx, x + (3 * h)) + 26 * func(this.state.fx, x + (2 * h)) - 14 * func(this.state.fx, x + (1 * h)) + 3 * func(this.state.fx, x)) / Math.pow(h, 4)
        }
        exact = funcDiffDegreeN(this.state.fx, x, degree)
        error = Math.abs((y - exact) / y) * 100
        this.setState({
            showOutputCard: true
        })
    }

    render() {
        return (
            <div style={{ padding: "30px" }}>
                <h2 style={{ color: "black", fontWeight: "bold" }}>Forward Divided-Differences O(h<sup>2</sup>)</h2>
                <div className="row">
                    <div className="col">
                        <Card
                            bordered={true}
                            style={{ background: "gray", borderRadius:"15px", color: "#FFFFFFFF" }}
                            onChange={this.handleChange}
                            id="inputCard"
                        >
                            <h2>f(x)</h2><Input size="large" name="fx" style={InputStyle}></Input>
                            <h2>Order derivative</h2><Input size="large" name="degree" style={InputStyle}></Input>
                            <h2>X</h2><Input size="large" name="x" style={InputStyle}></Input>
                            <h2>H</h2><Input size="large" name="h" style={InputStyle}></Input><br /><br />
                            <Button id="submit_button" onClick={
                                () => this.forwardh2(parseFloat(this.state.x), parseFloat(this.state.h), parseInt(this.state.degree))
                            }
                                style={{ background: "#4caf50", color: "white", fontSize: "20px" }}>Submit</Button>

                        </Card>
                    </div>
                    <div className="col">
                        {this.state.showOutputCard &&
                            <Card
                                title={"Output"}
                                bordered={true}
                                style={{ background: "#2196f3", color: "#FFFFFFFF" }}
                                id="outputCard"
                            >
                                <p style={{ fontSize: "24px", fontWeight: "bold" }}>
                                    Approximate = {y}<br />
                                    Exact = {exact.toFixed(8)}<br />
                                    Error(ε) = {error.toFixed(4)}%<br />
                                </p>
                            </Card>
                        }
                    </div>


                </div>
            </div>
        );
    }
}
export default Forwardh2;