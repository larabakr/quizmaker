import React from "react";
import { Link } from "react-router-dom";

class Quizzes extends React.Component {
  state = {
    quizzes: [],
    isLoading: true,
  };

  async componentDidMount() {
    const data = await fetch("/quizzes");
    const response = await data.json();

    this.setState({
      isLoading: false,
      quizzes: response,
    });
  }

  render() {
    return (
      <div className="quizzes">
        {this.state.isLoading ? (
          <p>Loading...</p>
        ) : this.state.quizzes.length >= 1 ? (
          this.state.quizzes.map((quiz: any) => (
            <div className="quiz">
              <h2>{quiz.name}</h2>
              <Link to={`/q/${quiz.id}`}>Take Quiz</Link>
            </div>
          ))
        ) : (
          <p>404 not found.</p>
        )}
      </div>
    );
  }
}

export default Quizzes;
