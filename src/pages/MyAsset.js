import React from 'react';
import  { Component } from 'react';
import queryString from 'query-string';
import Button from 'react-bootstrap/Button';
import * as service from 'services/post';
class MyAsset extends Component {
    render() {
    // const query = queryString.parse(location.search);


    return (
        <div>
            <h2>MyAsset </h2>
            <Button onClick={this.handleNavigateClick} 
                size='sm' bsPrefix='btn' variant="success">test</Button>
        </div>
    );
    
};
handleNavigateClick = async (type) => {
    // await Promise.call([
    service.start_pystock()
    // ]);

}
}



export default MyAsset;