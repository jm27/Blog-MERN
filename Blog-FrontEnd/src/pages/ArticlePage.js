import React, { Fragment, useState, useEffect } from "react";
import NotFoundPage from "./NotFoundPage";
import ArticlesList from "../Components/ArticlesList";
import CommentsList from "../Components/CommentsList";
import UpVoteSection from "../Components/UpVoteSection";
import AddCommentForm from "../Components/AddCommentForm";
import articleContent from "./article-content";

const ArticlePage = ({ match }) => {
  const name = match.params.name;
  const article = articleContent.find((article) => article.name === name);

  const [articleInfo, setArticleInfo] = useState({ upvotes: 0, comments: [] });

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch(`/api/articles/${name}`);
      const body = await result.json();
      setArticleInfo(body);
    };
    fetchData();
  }, [name]);

  if (!article) return <NotFoundPage></NotFoundPage>;

  const otherArticles = articleContent.filter(
    (article) => article.name !== name
  );

  return (
    <Fragment>
      <h1>{article.title}</h1>
      <UpVoteSection
        articleName={name}
        upvotes={articleInfo.upvotes}
        setArticleInfo={setArticleInfo}
      ></UpVoteSection>
      {article.content.map((p, i) => (
        <p key={i}>{p}</p>
      ))}
      <CommentsList comments={articleInfo.comments}></CommentsList>
      <AddCommentForm
        articleName={name}
        setArticleInfo={setArticleInfo}
      ></AddCommentForm>
      <h3>Related Articles</h3>
      <ArticlesList articles={otherArticles}></ArticlesList>
    </Fragment>
  );
};

export default ArticlePage;
