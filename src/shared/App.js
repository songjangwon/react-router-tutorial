import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
<<<<<<< HEAD
import { Home, MyAsset, Posts, LeftMenu } from 'pages';
=======
import { Home, About, Posts, LeftMenu, MyAsset, Option } from 'pages';
>>>>>>> 5d877158995d8cb8b128774b1e10f54689831128
import Menu from 'components/Menu';
import * as service from 'services/post';
import { Container, Row, Col, Tab, Nav } from 'react-bootstrap';


class App extends Component {
    render() {
        return (
            <div>
                <Menu />
                <Container>
                    <Row>
                        {/* <Col md={2}>
                            <LeftMenu/>
                        </Col> */}
                        <Col md={12}>
                            <Route exact path="/" component={Home} />
                            <Switch>
                                <Route path="/myAsset/:name" component={MyAsset} />
                                <Route path="/myAsset" component={MyAsset} />
                            </Switch>
                            <Route path="/posts" component={Posts} />
                            <Route path="/myAsset" component={MyAsset} />
                            <Route path="/option" component={Option} />
                        </Col>
                    </Row>
                </Container>
                {/* <Route exact path="/" component={Home} />
                <Switch>
                    <Route path="/about/:name" component={About} />
                    <Route path="/about" component={About} />
                </Switch>
                <Route path="/posts" component={Posts} /> */}


                {/* <div onClick={this.handleNavigateClick}>button</div> */}
            </div>

        );

    }
    handleNavigateClick = async (type) => {
        // await Promise.call([
        service.getPost()
        // ]);

    }
}

export default App;