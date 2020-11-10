import React from "react";

const CommentsList = ({ comments }) => (
  <>
    <h3 className='text-center display-6 mt-3 mb-3'><u>Comments</u></h3>
    {comments.map((comment, key) => (
      <div className='bg-light' key={key}>
        <h4 className='display-7 pt-3 pl-3'>{comment.username}</h4>
        <p className='lead pt-1 pb-3 pl-3'>{comment.text}</p>
      </div>
    ))}
  </>
);

export default CommentsList;
