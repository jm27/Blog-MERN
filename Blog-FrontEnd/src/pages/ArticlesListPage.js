import React, { Fragment } from "react";
import ArticlesList from "../Components/ArticlesList";
import articleContent from "./article-content";

const ArticlesListPage = () => (
  <Fragment>
    <h1>List of Articles </h1>
    <ArticlesList articles={articleContent}></ArticlesList>
  </Fragment>
);

export default ArticlesListPage;
