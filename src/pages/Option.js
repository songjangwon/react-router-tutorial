import React from 'react';
import queryString from 'query-string';

const Option = ({location, match}) => {
    const query = queryString.parse(location.search);



    return (
        <div>
            <h2>Option {match.params.name}</h2>
        </div>
    );
};

export default Option;