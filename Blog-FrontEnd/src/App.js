import HomePage from "./pages/HomePage.js";
import ArticlePage from "./pages/ArticlePage.js";
import AboutPage from "./pages/AboutPage.js";
import ArticlesList from "./pages/ArticlesList.js";
import NavBar from "./Components/NavBar.js";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <NavBar></NavBar>
      <Route path="/" component={HomePage} exact />
      <Route path="/about" component={AboutPage} />
      <Route path="/articles-list" component={ArticlesList} />
      <Route path="/article/:name" component={ArticlePage} />
    </Router>
  );
}

export default App;
