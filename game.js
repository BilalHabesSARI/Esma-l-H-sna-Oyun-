let score = 0;
let correctAnswer = "Merhametli";

const answers = [
    { question: "Rahem", answer: "Merhametli" },
    { question: "Zülcelâl", answer: "Cenab-ı Hakk’ın Celal sıfatı" },
    { question: "El-Hakem", answer: "Her şeyde hüküm koyan" },
    // Diğer anlamlar burada olacak
];

function getNewQuestion() {
    const randomIndex = Math.floor(Math.random() * answers.length);
    const question = answers[randomIndex].question;
    correctAnswer = answers[randomIndex].answer;
    document.getElementById('question').innerText = question;
}

function checkAnswer() {
    const userAnswer = document.getElementById('answer').value.trim();
    if (userAnswer === correctAnswer) {
        score++;
        document.getElementById('score').innerText = `Puan: ${score}`;
    }
    document.getElementById('answer').value = "";
    getNewQuestion();
}

// İlk soru
getNewQuestion();
