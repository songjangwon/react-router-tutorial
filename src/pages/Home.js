import React, { Component } from "react";
import Chart from "react-apexcharts";
import { Container, Row, Col, Tab, Nav } from 'react-bootstrap';
import ReactDataGrid from "react-data-grid";

const columns = [
    { key: "name", name: "종목", editable: true },
    { key: "buyPrice", name: "매수가", editable: true },
    { key: "currentPrice", name: "현재가", editable: true },
    { key: "possession", name: "보유수", editable: true },
    { key: "rate", name: "비중", editable: true }
  ];

  const rows = [
    { id: 0, name: "Task 1", buyPrice: 20 , currentPrice: 40, possession: 2,rate:10 },
    { id: 1, name: "Task 2", buyPrice: 20 , currentPrice: 40, possession: 2,rate:20 },
    { id: 2, name: "Task 3", buyPrice: 20 , currentPrice: 40, possession: 2,rate:25 },
    { id: 3, name: "Task 4", buyPrice: 20 , currentPrice: 40, possession: 2,rate:35 },
  ];

class Home extends Component {
    // state = { rows };

    onGridRowsUpdated = ({ fromRow, toRow, updated }) => {
        this.setState(state => {
          const rows = state.rows.slice();
          for (let i = fromRow; i <= toRow; i++) {
            rows[i] = { ...rows[i], ...updated };
          }
          return { rows };
        });
      };


    constructor(props) {
        super(props);

        this.state = {
            rows : rows,
            options1: {

                chart: {
                    type: 'pie',
                },
                labels: ['선진국', '신흥국', '한국국채', '현금성자산'],
                responsive: [{
                    breakpoint: 480,
                    options: {
                        chart: {
                            width: 200
                        },
                        legend: {
                            show: false,
                            position: 'bottom'
                        }
                    }
                }]
            },
            options2: {
                chart: {
                    type: 'pie',
                },
                labels: ['선진국', '신흥국', '한국국채', '현금성자산'],
                responsive: [{
                    breakpoint: 480,
                    options: {
                        chart: {
                            width: 200
                        },
                        legend: {
                            show: false,
                            position: 'bottom'
                        }
                    }
                }]
            },
            series1: [35, 35, 15, 15],
            series2: [25, 25, 25, 25],
        }
    }

    render() {
        return (
            <Container>
                <Row>
                    <Col md={6}>
                        <div className="donut" align="center">
                            <Chart options={this.state.options1} series={this.state.series1} type="donut" width="400" />

                            <h5>목표비율</h5>
                        </div>
                    </Col>
                    <Col md={6}>
                        <div className="donut" align="center">
                            <Chart options={this.state.options2} series={this.state.series2} type="donut" width="400" />

                            <h5>실제비율</h5>
                        </div>
                    </Col>
                </Row>
                <br/>
                <br/>
                <Row>
                    <ReactDataGrid
                        columns={columns}
                        rowGetter={i => this.state.rows[i]}
                        rowsCount={3}
                        onGridRowsUpdated={this.onGridRowsUpdated}
                        enableCellSelect={true}
                    />
                </Row>
            </Container>
        );
    }
}

export default Home;