import React from 'react';

const Post = ({match,location}) => {
    return (
        <div>
            포스트 {match.params.id}
        <br/>
            location.pathname {location.pathname}
            <br/>
            match.path {match.path}
            <br/>
            match.url {match.url}
            <br/>
        </div>
    );
};

export default Post;