import React from "react";
import './styling/style.css';

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import CreateQuiz from "./components/createQuiz";
import quiz from "./components/quiz";
import Home from "./components/home";
import NotFound from "./components/404";
import Quizzes from "./components/quizzes";

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="app">
          <div className="navbar">
            <nav>
              <div className="logo">
                <h1>QuizMaker</h1>
              </div>
              <ul>
                <li>
                  <Link to='/'>Home</Link>
                </li>
                <li>
                  <Link to='/create'>Create</Link>
                </li>
                <li>
                  <Link to='/quizzes'>Quizzes List</Link>
                </li>
              </ul>
            </nav>
          </div>
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
