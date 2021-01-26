import React from 'react';

const Comments = (props) =>
    <div className="comment">
        <h4> {props.email} </h4>
        <p> {props.body} </p>
    </div>

export default Comments;