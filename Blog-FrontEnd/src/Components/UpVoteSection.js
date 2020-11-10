import React from "react";

const UpVoteSection = ({ articleName, upvotes, setArticleInfo }) => {
  const upvoteArticle = async () => {
    const result = await fetch(`/api/articles/${articleName}/upvote`, {
      method: "post",
    });
    const body = await result.json();
    setArticleInfo(body);
  };

  return (
    <div className="d-flex flex-row mt-2 mb-2 justify-content-end">
      <button className='font-weight-bold btn btn-outline-dark' onClick={() => upvoteArticle()}>
        <i className="far fa-thumbs-up"></i>
      </button>
      <p className="ml-2 font-weight-bold"> {upvotes} Upvotes!</p>
    </div>
  );
};

export default UpVoteSection;
