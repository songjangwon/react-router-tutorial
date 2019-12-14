import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Home, About, Posts } from 'pages';
import Menu from 'components/Menu';
import * as service from 'services/post';
class App extends Component {
    render() {
        return (
            <div>
                <Menu/>
                <Route exact path="/" component={Home}/>
                <Switch>
                    <Route path="/about/:name" component={About}/>
                    <Route path="/about" component={About}/>
                </Switch>
                <Route path="/posts" component={Posts}/>
                <div onClick={this.handleNavigateClick}>button</div>
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