//js
document.addEventListener("DOMContentLoaded", function() {
    const quizContainer = document.getElementById('quiz');
    const resultsContainer = document.getElementById('results');
    const submitButton = document.getElementById('submit');

    const myQuestions = [
        {
            question: "Fullform of E-Mail",
            answers: {
                a: "Electronic Mail",
                b: "Electric Mail",
                c: "Edu Mail"
            },
            correctAnswer: "a"
        },
        {
            question: "Who is the Father of the Computer?",
            answers: {
                a: "Edison",
                b: "Charles Babbage",
                c: "Newton"
            },
            correctAnswer: "b"
        },
        {
            question: "What is the portable device?",
            answers: {
                a: "Mobile",
                b: "Laptop",
                c: "Monitor"
            },
            correctAnswer: "b"
        }
    ];

    function buildQuiz() {
        const output = [];

        myQuestions.forEach((currentQuestion, questionNumber) => {
            const answers = [];
            for (letter in currentQuestion.answers) {
                answers.push(
                    `<label>
                        <input type="radio" name="question${questionNumber}" value="${letter}">
                        ${letter} :
                        ${currentQuestion.answers[letter]}
                    </label>`
                );
            }
            output.push(
                `<div class="question"> ${currentQuestion.question} </div>
                <div class="answers"> ${answers.join('')} </div>`
            );
        });

        quizContainer.innerHTML = output.join('');
    }

    function showResults() {
        const answerContainers = quizContainer.querySelectorAll('.answers');
        let numCorrect = 0;

        myQuestions.forEach((currentQuestion, questionNumber) => {
            const answerContainer = answerContainers[questionNumber];
            const selector = `input[name=question${questionNumber}]:checked`;
            const userAnswer = (answerContainer.querySelector(selector) || {}).value;

            if (userAnswer === currentQuestion.correctAnswer) {
                numCorrect++;
                answerContainers[questionNumber].style.color = 'green';
            } else {
                answerContainers[questionNumber].style.color = 'red';
            }
        });

        resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
    }

    buildQuiz();

    submitButton.addEventListener('click', showResults);
});
