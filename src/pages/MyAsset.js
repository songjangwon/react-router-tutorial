import React from 'react';
import queryString from 'query-string';

const MyAsset = ({location, match}) => {
    const query = queryString.parse(location.search);

    const detail = query.detail === 'true';

    return (
        <div>
            <h2>MyAsset {match.params.name}</h2>
            {detail && 'detail: blahblah'}
        </div>
    );
};

export default MyAsset;