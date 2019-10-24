import React from 'react';
import './comment-input.css';

const CommentInput = props => {
    return(
        <div className="comment-input">
            
            <label
             className="comment-input__label" 
             htmlFor="comment_textbox">
                 Write a new comment
            </label>
            
            <textarea
             className="comment-input__text" 
             name="new-comment" 
             placeholder="Whats in your mind..." 
             rows="5"
             onChange={props.change}
             />
            
            <button
             className="add-comment"
             name="add-comment"
             onClick={props.click}>
                 +
            </button>

        </div>
    )
}

export default CommentInput;