import React, { Fragment } from "react";
import NotFoundPage from "./NotFoundPage";
import ArticlesList from "../Components/ArticlesList";
import articleContent from "./article-content";

const ArticlePage = ({ match }) => {
  const name = match.params.name;
  const article = articleContent.find((article) => article.name === name);

  if (!article) return <NotFoundPage></NotFoundPage>;

  const otherArticles = articleContent.filter(
    (article) => article.name !== name
  );

  return (
    <Fragment>
      <h1>{article.title}</h1>
      {article.content.map((p, i) => (
        <p key={i}>{p}</p>
      ))}
      <h3>Related Articles</h3>
      <ArticlesList articles={otherArticles}></ArticlesList>
    </Fragment>
  );
};

export default ArticlePage;
