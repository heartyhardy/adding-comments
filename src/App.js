import React, { useState } from 'react';
import './App.css';

import Navbar from './components/navbar';
import Comments from './components/comments';
import CommentInput from './components/comment-input';

const App = (props) => {

  const [comments, setComments] = useState([]);
  const [currentComment, setCurrentComment] = useState("");

  const onAddComment = (event) => {
    if(currentComment.comment){
      let allComments = [...comments , currentComment];
      setComments(allComments);
    }
  }

  const onInputComment = (event) => {
    let comment = {comment: event.target.value};
    setCurrentComment(comment);
  }

  const onDelete = (index) => {
    const allComments = [...comments];
    allComments.splice(index, 1);
    setComments(allComments);
  }

  return (
    <div className="App">
      {/*<p>{props.title}</p>*/}
      <header className="App-header">
        <Navbar />
      </header>
      <Comments collection={comments} delete={onDelete}/>
      <CommentInput click={onAddComment} change={onInputComment} />
    </div>
  );
}

export default App;
