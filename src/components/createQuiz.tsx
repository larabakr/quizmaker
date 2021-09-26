import React from "react";

const questions: {}[] = [];

class CreateQuiz extends React.Component {
  state = {
    currentQuestion: questions.length + 1,
  };

  componentWillUnmount() {
    this.setState({
      currentQuestion: 0,
    });
  }

  handleSubmit = (e: any) => {
    e.preventDefault();

    const question = document.getElementById("question") as HTMLInputElement;
    const answer = document.getElementById("answer") as HTMLInputElement;

    const fanswer1 = document.getElementById("f-answer-1") as HTMLInputElement;
    const fanswer2 = document.getElementById("f-answer-2") as HTMLInputElement;
    const fanswer3 = document.getElementById("f-answer-3") as HTMLInputElement;

    questions.push({
      question: question.value,
      correctAnswer: answer.value,
      choices: [fanswer1.value, fanswer2.value, fanswer3.value, answer.value],
    });

    question.value = "";
    answer.value = "";
    fanswer1.value = "";
    fanswer2.value = "";
    fanswer3.value = "";

    this.setState({
      currentQuestion: questions.length + 1,
    });

    console.log(questions);
  };

  submitQuiz = (e: any) => {
    e.preventDefault();
    if (questions.length >= 1) {
      fetch("/quiz", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          questions,
          totalQuestions: questions.length,
          name: (document.getElementById("name") as HTMLInputElement).value,
        }),
      })
        .then((res) => res.json())
        .then((res) => alert(res.id));
    } else {
      alert("Please enter at least one question to the quiz");
    }
  };

  render() {
    return (
      <div className="create-quiz">
        <div className="cont">
          <h2>Question {this.state.currentQuestion}#</h2>
          <form onSubmit={this.handleSubmit}>
            <input type="text" id="name" placeholder="quiz name" required />
            <br />
            <input type="text" id="question" placeholder="question" required />
            <br />
            <input
              type="text"
              id="answer"
              placeholder="correct answer"
              autoComplete="off"
              required
            />
            <br />
            <input
              type="text"
              id="f-answer-1"
              placeholder="false answer 1"
              autoComplete="off"
              required
            />
            <br />
            <input
              type="text"
              id="f-answer-2"
              placeholder="false answer 2"
              autoComplete="off"
              required
            />
            <br />
            <input
              type="text"
              id="f-answer-3"
              placeholder="false answer 3"
              autoComplete="off"
              required
            />
            <br />
            <br />
            <button type="submit">Add Question</button>
            <button onClick={this.submitQuiz}>Submit Quiz</button>
          </form>
        </div>
      </div>
    );
  }
}

export default CreateQuiz;
