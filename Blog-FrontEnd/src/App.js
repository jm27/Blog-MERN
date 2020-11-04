import HomePage from "./pages/HomePage.js";
import ArticlePage from "./pages/ArticlePage.js";
import AboutPage from "./pages/AboutPage.js";
import ArticlesListPage from "./pages/ArticlesListPage.js";
import NotFoundPage from "./pages/NotFoundPage.js";
import NavBar from "./Components/NavBar.js";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <NavBar></NavBar>
      <Switch>
        <Route path="/" component={HomePage} exact />
        <Route path="/about" component={AboutPage} />
        <Route path="/articles-list" component={ArticlesListPage} />
        <Route path="/article/:name" component={ArticlePage} />
        <Route component={NotFoundPage}></Route>
      </Switch>
    </Router>
  );
}

export default App;
