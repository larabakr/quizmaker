import express from "express";

const app = express();

app.use(express.json());

const generateID = (length) => {
  const alphabet =
    "qazwsxedcrfvtgbyhnujmikolpOPLKUJYHTGRFEDWSQAZXCVBNM1234567890".split("");
  let result = "";

  for (let i = 0; i < length; i++) {
    result += alphabet[Math.floor(Math.random() * alphabet.length)];
  }

  return result;
};

const quizzes = [];

app.get("/quiz/:quiz_id", (req, res) => {
  res.json(quizzes.filter((quiz) => quiz.id == req.params.quiz_id)[0]);
});

app.get("/quizzes", (req, res) => {
  res.json(quizzes);
});

app.post("/quiz", (req, res) => {
  const newquiz = {
    questions: req.body.questions,
    id: generateID(12),
    totalQuestions: req.body.totalQuestions,
    name: req.body.name,
  };
  quizzes.push(newquiz);

  console.log(quizzes);
  res.json({
    status: 200,
    id: newquiz.id,
  });
});

app.listen(3001);
