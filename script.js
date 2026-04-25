let questions = [];
let current = 0;
let score = 0;

// 🔥 FETCH QUESTIONS
fetch("http://localhost:4000/questions")
.then(res => res.json())
.then(data => {
  questions = data;

  if (questions.length === 0) {
    document.getElementById("question").innerText = "No questions found!";
    return;
  }

  loadQuestion();
});

// 🧠 LOAD QUESTION
function loadQuestion() {
  let q = questions[current];

  document.getElementById("question").innerText = q.question;

  let optionsDiv = document.getElementById("options");
  optionsDiv.innerHTML = "";

  document.getElementById("progress").innerText =
    "Question " + (current + 1) + " / " + questions.length;

  q.options.forEach(opt => {
    let btn = document.createElement("button");
    btn.innerText = opt;

    btn.onclick = () => checkAnswer(opt);

    optionsDiv.appendChild(btn);
  });
}

// ✅ CHECK ANSWER
function checkAnswer(ans) {
  if (ans === questions[current].answer) {
    score++;
  }

  current++;

  if (current < questions.length) {
    loadQuestion();
  } else {
    showResult();
  }
}

// 🏁 RESULT
function showResult() {
  document.getElementById("quiz-box").style.display = "none";

  document.getElementById("result").innerHTML =
    "🏆 Your Score: " + score + " / " + questions.length;
}