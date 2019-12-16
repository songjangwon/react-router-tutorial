import React, { Component } from "react";
import Chart from "react-apexcharts";
import { Container, Row, Col, Tab, Nav } from 'react-bootstrap';
import ReactDataGrid from "react-data-grid";

const columns = [
    { key: "id", name: "ID", editable: true },
    { key: "title", name: "Title", editable: true },
    { key: "complete", name: "Complete", editable: true }
  ];
  
  const rows = [
    { id: 0, title: "Task 1", complete: 20 },
    { id: 1, title: "Task 2", complete: 40 },
    { id: 2, title: "Task 3", complete: 60 }
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