const questions = [
    {
        pertanyaan: "Planet manakah yang memiliki cincin paling spektakuler dan terlihat dari Bumi?",
        jawaban: [
            { text: "Venus", correct: false },
            { text: "Saturnus", correct: true },
            { text: "Mars", correct: false },
            { text: "Neptunus", correct: false },
        ]
    },
    {
        pertanyaan: "Siapa yang menjadi manusia pertama yang menginjakkan kaki di Bulan pada misi Apollo 11?",
        jawaban: [
            { text: "Buzz Aldrin", correct: false },
            { text: "Michael Collins", correct: false },
            { text: "Neil Armstrong", correct: true },
            { text: "Yuri Gagarin", correct: false },
        ]
    },
    {
        pertanyaan: "Siapa yang pertama kali menyampaikan teori pasang surut??",
        jawaban: [
            { text: "Isaac Newton", correct: false },
            { text: "James H. Jeans", correct: false },
            { text: "Buffon", correct: true },
            { text: "Gerard P. Kuiper", correct: false },
        ]
    },
    {
        pertanyaan: "Apa nama satu-satunya satelit alami yang dimiliki oleh Bumi?",
        jawaban: [
            { text: "Mars", correct: false },
            { text: "Phobos", correct: false },
            { text: "Deimos", correct: false },
            { text: "Bulan", correct: true },
        ]
    },
    {
        pertanyaan: "Apa yang dimaksud dengan supernova?",
        jawaban: [
            { text: "Sebuah galaksi yang sedang terbentuk", correct: false },
            { text: "Ledakan dahsyat yang terjadi pada akhir siklus hidup sebuah bintang besar", correct: true },
            { text: "Lubang hitam yang baru terbentuk", correct: false },
            { text: "Meteor besar yang menabrak planet", correct: false },
        ]
    },
];

const pertanyaanElement = document.getElementById("pertanyaan");
const jawabanButton = document.getElementById("jawaban-btn");
const nextButton = document.getElementById("next-btn");
const homeButton = document.getElementById("home-btn");
const clickSound = document.getElementById("click-sound");
const correctSound = document.getElementById("correct-sound");
const wrongSound = document.getElementById("wrong-sound");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.classList.add("text-center","mt-2","d-flex","float-end");
    nextButton.innerHTML = "Selanjutnya";
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    pertanyaanElement.innerHTML = questionNo + ". " + currentQuestion.pertanyaan;

    currentQuestion.jawaban.forEach(jawaban => {
        const button = document.createElement("button");
        button.innerHTML = jawaban.text;
        button.classList.add("btn", "btn-custom", "w-100", "mb-2", "p-2");
        button.dataset.correct = jawaban.correct;
        button.addEventListener('click', selectAnswer);
        jawabanButton.appendChild(button);
    });
}

function resetState() {
    nextButton.style.display = "none";
    while (jawabanButton.firstChild) {
        jawabanButton.removeChild(jawabanButton.firstChild);
    }
}

function selectAnswer(e) {
    const selectedButton = e.target;
    clickSound.play();
    const isCorrect = selectedButton.dataset.correct === 'true';
    if (isCorrect) {
        selectedButton.classList.add("btn-success");
        correctSound.play();
        score++;
    } else {
        selectedButton.classList.add("btn-danger");
        wrongSound.play();
    }
    Array.from(jawabanButton.children).forEach(button => {
        if (button.dataset.correct === 'true') {
            button.classList.add("btn-success");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
}

function showScore() {
    resetState();
    pertanyaanElement.innerHTML = `Kamu menjawab dengan benar <br> ${score} dari ${questions.length} pertanyaan!`;
    nextButton.classList.add("w-50","text-center","mt-4","d-flex","rounded");
    nextButton.innerHTML = "Ulangi";
    nextButton.style.display = "block";
    homeButton.style.display = "block";
}

nextButton.addEventListener('click', () => {
    if (currentQuestionIndex < questions.length) {
        handleNextButton();
    } else {
        startQuiz();
    }
});

startQuiz();
