import React from 'react';

const Post = (props) => {
    return (
        <div className="post">
            <div className="post__content">
                <strong>{props.post.id}. {props.post.title}</strong>
                <p>{props.post.title} - {props.post.body}</p>
            </div>

            <div className="post__button">
                <button>Удалить</button>
            </div>
        </div>
    );
};

Post.defaultProps = {
    post: {id: "#", title: 'Something', body: 'About'}
};

export default Post;