import React from "react";
import "./styling/style.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CreateQuiz from "./components/createQuiz";
import quiz from "./components/quiz";
import Home from "./components/home";
import NotFound from "./components/404";
import Quizzes from "./components/quizzes";
import Navbar from "./components/navbar";

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="app">
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/create" component={CreateQuiz} />
            <Route exact path="/q/:id" component={quiz} />
            <Route path="/quizzes" component={Quizzes} />
            <Route path="*" component={NotFound} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
