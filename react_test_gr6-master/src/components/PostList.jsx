import React from 'react';
import Post from "./Post";

const PostList = (props) => {
    const posts = props.posts;
    const list = posts.map(post =>
        <li>
            <Post post={post} key={post.id}/>
        </li>
    );
    return (
        <ul className="postList">
            {list}
        </ul>
    );
};

export default PostList;