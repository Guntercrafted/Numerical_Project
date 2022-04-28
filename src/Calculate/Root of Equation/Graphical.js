import React, { Component } from 'react'
import { Card, Input, Button, Table } from 'antd';
import '../../screen.css';
import 'antd/dist/antd.css';
import Graph from '../../components/Graph';
import { func } from '../../services/Services';


const InputStyle = {
    background: "PaleGreen",
    color: "SteelBlue",
    fontWeight: "bold",
    fontSize: "24px"

};
var dataInTable;
const columns = [
    {
        title: "Iteration",
        dataIndex: "iteration",
        key: "iteration"
    },
    {
        title: "X",
        dataIndex: "x",
        key: "x"
    },
    {
        title: "Y",
        key: "y",
        dataIndex: "y"
    }
];

class Graphical extends Component {

    constructor() {
        super();
        this.state = {
            fx: "",
            start: 0,
            finish: 0,
            showOutputCard: false,
            showGraph: false
        }
        this.handleChange = this.handleChange.bind(this);
        this.graphical = this.graphical.bind(this);
    }

    graphical() {
        var data = []
        data['x'] = []
        data['y'] = []
        console.log(typeof (this.state.start))
        for (var i = parseInt(this.state.start); i <= parseInt(this.state.finish); i++) {
            data['x'].push(i);
            data['y'].push(func(this.state.fx, i));

        }


        this.createTable(data['x'], data['y']);
        this.setState({
            showOutputCard: true,
            showGraph: true
        })


    }

    createTable(x, y) {
        dataInTable = []
        for (var i = 0; i <= parseInt(this.state.finish - this.state.start); i++) {
            dataInTable.push({
                iteration: i + 1,
                x: x[i],
                y: y[i]
            });
        }

    }
    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }
    render() {
        let { fx, start, finish } = this.state;
        return (
            <div style={{  padding: "30px" }}>
                <h2 style={{ color: "black", fontWeight: "bold" }}>Graphical</h2>

                <div className="row">
                    <div className="col">
                        <Card
                            style={{ background: "gray", color: "#FFFFFFFF", borderRadius:"10px" }}
                            onChange={this.handleChange}
                        >
                            <h4>f(x)</h4><Input size="large" name="fx" style={InputStyle}></Input>
                            <h4>Start</h4><Input size="large" name="start" style={InputStyle}></Input>
                            <h4>Finish</h4><Input size="large" name="finish" style={InputStyle}></Input><br /><br />
                            <Button id="submit_button" onClick={
                                () => this.graphical(parseFloat(start), parseFloat(finish))
                            }
                                style={{ background: "#4caf50", color: "white"}}>Submit</Button>

                        </Card>                        
                    </div>
                    <div className="col">
                        {this.state.showGraph && <Graph fx={fx}  title="Graphical Method" />}
                    </div>
                </div>
                <div className="row">
                    {this.state.showOutputCard &&
                        <Card
                            title={"Output"}
                            bordered={true}
                            style={{ width: "100%", background: "#2196f3", color: "#FFFFFFFF" }}
                            id="outputCard"
                        >
                            <Table columns={columns} bordered={true} dataSource={dataInTable} bodyStyle={{ fontWeight: "bold", fontSize: "18px", color: "black" }}></Table>
                        </Card>
                    }                    
                </div>
            </div>
        );
    }
}
export default Graphical;