import React from 'react';
import './comments.css';

import Comment from './comment';

const Comments = props => {

    return(
        <div className="comments">
            {
                props.collection.map((e, i) => {
                    return (
                            <Comment
                             key={i} 
                             data={e} 
                             symbol={'👦'} 
                             click={(event) => {props.delete(i)}}
                             />
                        )
                })
            }
        </div>
    )
}

export default Comments;