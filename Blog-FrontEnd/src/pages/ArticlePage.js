import React, { Fragment } from "react";

const ArticlesPage = ({ match }) => {
  const name = match.params.name;

  return (
    <Fragment>
      <h1>This is the ${name} article </h1>
    </Fragment>
  );
};

export default ArticlesPage;
