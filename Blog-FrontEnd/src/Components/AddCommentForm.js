import React, { useState } from "react";

const AddCommentForm = ({ articleName, setArticleInfo }) => {
  const [username, setUsername] = useState("");
  const [comment, setComment] = useState("");

  const addComment = async () => {
    const result = await fetch(`/api/articles/${articleName}/add-comment`, {
      method: "post",
      body: JSON.stringify({ username, text: comment }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const body = await result.json();
    setArticleInfo(body);
    setUsername("");
    setComment("");
  };

  return (
    <>
      <h3 className="display-6 mt-3 mb-3">Add a Comment</h3>
      <div id="add-comment-form" className="form-group mb-3">
        <label className="font-weight-bold">Name:</label>
        <input
          placeholder="Full name"
          className="form-control"
          type="text"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        ></input>

        <label className="font-weight-bold">Comment:</label>
        <textarea
         placeholder="This article is awesome!!"
          className="form-control"
          rows="4"
          cols="50"
          value={comment}
          onChange={(event) => setComment(event.target.value)}
        ></textarea>
              <button
        className="float-right mt-3 font-weight-bold btn btn-outline-dark"
        onClick={() => addComment()}
      >
        Add Comment
      </button>
      </div>

      
    </>
  );
};

export default AddCommentForm;
