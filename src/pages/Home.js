import React, { Component } from "react";
import Chart from "react-apexcharts";
import { Container, Row, Col, Tab, Nav } from 'react-bootstrap';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            options: {
                chart: {
                    type: 'donut',
                },
                labels: ['A', 'B', 'C', 'D'],
                responsive: [{
                    breakpoint: 480,
                    options: {
                        chart: {
                            width: 200
                        },
                        legend: {
                            position: 'bottom'
                        }
                    }
                }]
            },
            series1: [35, 35, 15, 15],
            series2: [25, 25, 25, 25],
            series3: [15, 15, 35, 35],
        }
    }

    render() {
        return (
            <Container>
                <Row>
                    <Col md={5}>
                        <div className="donut">
                            <Chart options={this.state.options} series={this.state.series1} type="donut" width="350" />
                            <br/>
                        <h5>공격형자산</h5>
                        </div>
                        
                        
                    </Col>
                    <Col md={5}>
                        <div className="donut">
                            <Chart options={this.state.options} series={this.state.series2} type="donut" width="350" />
                            <br/>
                        <h5>중립형자산</h5>
                        </div>
                        
                        
                    </Col>
                    <Col md={5}>
                        <div className="donut">
                            <Chart options={this.state.options} series={this.state.series3} type="donut" width="350" />
                            <br/>
                        <h5>안전형자산</h5>
                        </div>
                        
                        
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default App;