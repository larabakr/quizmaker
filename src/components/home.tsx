import React from "react";
import { withRouter } from "react-router";

import quiz from "./quiz.svg";

class Home extends React.Component<any> {
  getQuiz = (e: any) => {
    if (e.key === "Enter") {
      this.props.history.push(`/q/${e.target.value}`);
    }
  };

  getQuizButton = () => {
    const get = (document.getElementById("get") as HTMLInputElement).value;

    if (get) {
      this.props.history.push(`/q/${get}`);
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
        {/* <div className="get-quiz">
          <input type="text" id="get" placeholder="quiz id" onKeyPress={this.getQuiz} />
          <button onClick={this.getQuizButton}>Get Quiz!</button>
        </div> */}
        <div className="features">
            <div className="feature">

            </div>
            <div className="feature">

            </div>
            <div className="feature">
                
            </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Home);
