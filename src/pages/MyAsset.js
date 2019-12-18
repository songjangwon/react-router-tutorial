import React from 'react';
import queryString from 'query-string';

const MyAsset = ({location, match}) => {
    const query = queryString.parse(location.search);

<<<<<<< HEAD
    const detail = query.detail === 'true';
=======

>>>>>>> 5d877158995d8cb8b128774b1e10f54689831128

    return (
        <div>
            <h2>MyAsset {match.params.name}</h2>
<<<<<<< HEAD
            {detail && 'detail: blahblah'}
=======
>>>>>>> 5d877158995d8cb8b128774b1e10f54689831128
        </div>
    );
};

export default MyAsset;