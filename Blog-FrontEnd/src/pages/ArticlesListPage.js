import React, { Fragment } from "react";
import ArticlesList from "../Components/ArticlesList";
import articleContent from "./article-content";

const ArticlesListPage = () => (
  <div className="jumbotron">
    <h1 className="text-center pb-3 display-4"><u>List of Articles</u></h1>
    <ArticlesList articles={articleContent}></ArticlesList>
  </div>
);

export default ArticlesListPage;
