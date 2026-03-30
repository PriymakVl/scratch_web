let currentQuestion = 0;
let userAnswers = [];

const quiz = document.getElementById("quiz");
const nextBtn = document.getElementById("nextBtn");
const resultDiv = document.getElementById("result");

function loadQuestion() {
    const q = quizData[currentQuestion];

    quiz.innerHTML = `
        <div class="question">${q.question}</div>
        <div class="answers">
            ${q.answers.map((ans, i) => `
                <label>
                    <input type="radio" name="answer" value="${i}">
                    ${ans}
                </label>
            `).join("")}
        </div>
    `;
}

nextBtn.addEventListener("click", () => {
    const selected = document.querySelector('input[name="answer"]:checked');

    if (!selected) {
        alert("Выберите ответ!");
        return;
    }

    userAnswers.push(Number(selected.value));
    currentQuestion++;

    if (currentQuestion < quizData.length) {
        loadQuestion();
    } else {
        showResults();
    }
});

function showResults() {
    quiz.classList.add("hidden");
    nextBtn.classList.add("hidden");
    resultDiv.classList.remove("hidden");

    let table = `
        <h2>Результаты</h2>
        <table>
            <tr>
                <th>Вопрос</th>
                <th>Ваш ответ</th>
                <th>Правильный ответ</th>
            </tr>
    `;

    quizData.forEach((q, index) => {
        const user = userAnswers[index];
        const correct = q.correct;

        table += `
            <tr class="${user === correct ? 'correct' : 'wrong'}">
                <td>${q.question}</td>
                <td>${q.answers[user]}</td>
                <td>${q.answers[correct]}</td>
            </tr>
        `;
    });

    table += "</table>";

    resultDiv.innerHTML = table;
}

// старт
loadQuestion();
