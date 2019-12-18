import React from 'react';
import queryString from 'query-string';
import Table from 'react-bootstrap/Table';
import DateTimePicker from 'react-widgets/lib/DateTimePicker';
import Moment from 'moment';
import momentLocalizer from 'react-widgets-moment';

Moment.locale('en')
momentLocalizer()
const Option = ({ location, match }) => {
    const query = queryString.parse(location.search);
    
    return (

        <div>
            <h2>Option {match.params.name}</h2>
            <Table striped bordered hover variant="">
                <thead>
                    <tr>
                        <th colSpan='4'>#</th>

                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td colSpan='4'>자산비율조정</td>

                    </tr>
                    <tr>
                        <td colSpan='4'>리밸런싱 선택(자동,수동)</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        
                    </tr>
                </tbody>
            </Table>
            <div>
            
            </div>
            
        </div>

    );
};

export default Option;