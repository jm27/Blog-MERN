import React from "react";

const HomePage = () => (
  <div className="jumbotron">
    <h1 className="text-center pb-3 display-4"><u>Hello, welcome to my blog!</u></h1>
    <p className="lead font-weight-normal pl-2 pr-2">
      "Hi and Welcome dear reader <span>&#128075;</span> to my personal Blog, this site represents an experiment in building
      online applications using the MERN (MongoDb, Express.js, React.js, Node.js) stack <span>&#128295;</span>, deploying and hosting
      with AWS(Amazon Web Services).The design of the site is powered by Bootstrap 4 <span>&#127912;</span>.
       Please Accept my apologies for filling up the content with dummy text.
       I plan to make this a personal log, but until then this is merely for demonstration purposes. 
       Thanks for passing by <span>&#128591;</span>!"
    </p>
    <p className="lead font-weight-normal pl-2 pr-2">
      "This Application allows user to give upvotes to Articles and share their thoughts
      via comments <span>&#128172;</span>, this data is persistent since it is stored in MongoDB <span>&#128204;</span>. Routes are created using 
      an Express server <span>&#128296;</span>, Node.js allows us to use NPM packages <span>&#128736;</span>,
     the Front-end is built with React components<span>&#128297;</span> using 'Hooks' for state management
      and components life cycle events."
    </p>
  </div>
);

export default HomePage;
