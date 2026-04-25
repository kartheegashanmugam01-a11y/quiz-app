const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

// 🧬 AUTO LOADED QUESTIONS
let questions = [
  {
    question: "What is the basic unit of life?",
    options: ["Tissue", "Cell", "Organ", "System"],
    answer: "Cell"
  },
  {
    question: "Which organ pumps blood?",
    options: ["Brain", "Heart", "Lungs", "Liver"],
    answer: "Heart"
  },
  {
    question: "Which organelle is called powerhouse of cell?",
    options: ["Nucleus", "Ribosome", "Mitochondria", "Golgi body"],
    answer: "Mitochondria"
  },
  {
    question: "Which gas do plants absorb?",
    options: ["Oxygen", "Carbon dioxide", "Nitrogen", "Hydrogen"],
    answer: "Carbon dioxide"
  }
];

// 🟢 GET QUESTIONS
app.get("/questions", (req, res) => {
  res.json(questions);
});

// 🔴 ADD QUESTION (optional admin)
app.post("/admin/add", (req, res) => {
  questions.push(req.body);
  res.json({ message: "Question added successfully 🔥" });
});

// 🚀 START SERVER
app.listen(4000, () => {
  console.log("🔥 Server running on http://localhost:4000");
});