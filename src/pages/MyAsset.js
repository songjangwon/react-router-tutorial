import React from 'react';
import queryString from 'query-string';

const MyAsset = ({location, match}) => {
    const query = queryString.parse(location.search);



    return (
        <div>
            <h2>MyAsset {match.params.name}</h2>
        </div>
    );
};

export default MyAsset;