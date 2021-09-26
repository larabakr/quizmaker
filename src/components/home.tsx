import React from "react";
import { withRouter } from "react-router";

import quiz from "./quiz.svg";

class Home extends React.Component<any> {
  getQuiz = (e: any) => {
    if (e.key === "Enter") {
      this.props.history.push(`/q/${e.target.value}`);
    }
  };

  handleClick = () => {
    this.props.history.push("/create");
  };

  render() {
    return (
      <div className="home">
        <div className="hero-flex">
          <div className="text">
            <h2>Create quizzes for free</h2>
            <p>Create a quiz that brings friends together.</p>
            <button onClick={this.handleClick}>Create Quiz</button>
          </div>
          <div className="img">
            <img src={quiz} draggable={false} alt="" />
          </div>
        </div>
        <div className="get-quiz">
          <h2>Get quiz by ID</h2>
          <input type="text" placeholder="quiz id" onKeyPress={this.getQuiz} />
        </div>
      </div>
    );
  }
}

export default withRouter(Home);
