import React from "react";
import { Link } from "react-router-dom";

const ArticlesList = ({ articles }) => (
  <div className='row d-flex justify-content-around'>
    {articles.map((a, i) => (
      <div className='card col-md-5 text-center mb-3' >
      <div className="card-body">
        <h3 className="display-6">{a.title}</h3>{" "}
        <p className="lead">{a.content[0].substring(0, 150)}...</p>{" "}
        <Link
          className="font-weight-bold btn btn-outline-dark"
          key={i}
          to={`/article/${a.name}`}
        >Read Article</Link>
      </div>
      </div>
    ))}
  </div>
);

export default ArticlesList;


