import React from "react";
import { Link } from "react-router-dom";

const ArticlesList = ({ articles }) => (
  <>
    {articles.map((a, i) => (
      <Link key={i} to={`/article/${a.name}`}>
        <h3>{a.title}</h3>
        <p>{a.content[0].substring(0, 150)}...</p>
      </Link>
    ))}
  </>
);

export default ArticlesList;
