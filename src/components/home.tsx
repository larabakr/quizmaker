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
        <div className="features">
          <div className="feature">
            <div className="icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="50"
                height="50"
                viewBox="0 0 24 24"
                style={{ fill: "white" }}
              >
                <circle cx="17" cy="4" r="2"></circle>
                <path d="M15.777 10.969a2.007 2.007 0 0 0 2.148.83l3.316-.829-.483-1.94-3.316.829-1.379-2.067a2.01 2.01 0 0 0-1.272-.854l-3.846-.77a1.998 1.998 0 0 0-2.181 1.067l-1.658 3.316 1.789.895 1.658-3.317 1.967.394L7.434 17H3v2h4.434c.698 0 1.355-.372 1.715-.971l1.918-3.196 5.169 1.034 1.816 5.449 1.896-.633-1.815-5.448a2.007 2.007 0 0 0-1.506-1.33l-3.039-.607 1.772-2.954.417.625z"></path>
              </svg>
            </div>
            <h2>Lightweight & fast</h2>
            <p>QuizMaker is fast and runs smoothly.</p>
          </div>
          <div className="feature">
            <div className="icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="50"
                height="50"
                viewBox="0 0 24 24"
                style={{ fill: "white" }}
              >
                <path d="M20 12c0-1.103-.897-2-2-2h-1V7c0-2.757-2.243-5-5-5S7 4.243 7 7v3H6c-1.103 0-2 .897-2 2v8c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2v-8zM9 7c0-1.654 1.346-3 3-3s3 1.346 3 3v3H9V7z"></path>
              </svg>
            </div>
            <h2>No data-tracking</h2>
            <p>Your data, your rules.</p>
          </div>
          <div className="feature">
            <div className="icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="50"
                height="50"
                viewBox="0 0 24 24"
                style={{ fill: "white" }}
              >
                <path d="M13 8v8h2V8c0-2.206-1.794-4-4-4H5v16h2V6h4c1.103 0 2 .897 2 2z"></path>
                <path d="M17 16c0 1.103-.897 2-2 2h-4V8H9v12h6c2.206 0 4-1.794 4-4V4h-2v12z"></path>
              </svg>
            </div>
            <h2>Free</h2>
            <p>You can create quizzes for no cost.</p>
          </div>
        </div>
        <footer>
          <div className="left">
            <p>
              Made by{" "}
              <a
                href="https://github.com/uwuxia"
                rel="noopener noreferrer"
                target="_blank"
              >
                @uwuxia
              </a>
            </p>
          </div>
          <div className="right">
            <div className="get-quiz">
              <input
                type="text"
                id="get"
                placeholder="Enter a quiz id"
                autoComplete="off"
                onKeyPress={this.getQuiz}
              />
              <button onClick={this.getQuizButton}>Get Quiz!</button>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

export default withRouter(Home);
