import React from 'react';
import './comment.css';

const Comment = props => {
    return (
        <div className="comment" onClick={props.click}>
            <span
                className="emoji"
                role="img"
                aria-label={props.label ? props.label : ""}
                aria-hidden={props.label ? "false" : "true"}
            >
                {props.symbol}
            </span>
            <p className="comment_p">{props.data.comment}</p>
        </div>
    )
}

export default Comment;