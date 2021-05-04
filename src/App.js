// importing react
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// importing components
import Header from "./components/header/Header";
import Home from "./views/Home";
import About from "./views/About";
import Blog from "./views/Blog";

import "./App.scss";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/blog/:id" component={Blog} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
