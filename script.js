const quizdb = [
    {
        question: "Q1: What is the full form of HTML?",
        a: "Hyper Text Preprocessor",
        b: "Hyper Text Markup Language",
        c: "Hyper Text Multiple Language",
        d: "Hyper Tool Multi Language",
        ans: "ans2"
    },
    {
        question: "Q2: What is the full form of css?",
        a: "Cascading Style Sheet ",
        b: "Cascading Spread Sheet ",
        c: "cyber spread sheet",
        d: "cascading spread sheet",
        ans: "ans1"
    },
    {
        question: "Q3: What is the full form of js?",
        a: "java script",
        b: "jam script",
        c: "just still",
        d: "jqueery strip",
        ans: "ans1"
    },
    {
        question: "Q4: Tag use for breal line?",
        a: "</br>",
        b: "</hr>",
        c: "</p>",
        d: "</bt>",
        ans: "ans1"
    },
]

const question =document.querySelector('.question');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
const submit =document.querySelector('#submit');

const startbtn =document.querySelector('.start_btn');
const abcd =document.querySelector('.abc');

const answers =document.querySelectorAll('.answer');

const showScore =document.querySelector('#showScore');

let questionCount =0;
let score =0;


startbtn.addEventListener('click', () => {
    startbtn.style.display = 'none';
    abcd.classList.remove('abc');

});


const loadQuestion = () => {

    // const questionList =quizdb[questionCount];
    // question.innerHTML= questionList.question;

    question.innerHTML= quizdb[questionCount].question;

    option1.innerHTML= quizdb[questionCount].a;
    option2.innerHTML= quizdb[questionCount].b;
    option3.innerHTML= quizdb[questionCount].c;
    option4.innerHTML= quizdb[questionCount].d;
}
loadQuestion()

const getCheckAnswer= () => {
    let answer;

    answers.forEach((curAnsElem) => {
        if(curAnsElem.checked){
            answer = curAnsElem.id;
        }
        
    });
    return answer;
};

const deselectAll =() => {
    answers.forEach((curAnsElem) => curAnsElem.checked =false );
}

submit.addEventListener('click', () => {
        const checkedAnswer =getCheckAnswer();
        console.log(checkedAnswer);

        if(checkedAnswer === quizdb[questionCount].ans){
            score++;
        }
        else{
            score--;
        };
        
        questionCount++;

        deselectAll();

        if(questionCount < quizdb.length){
            loadQuestion();
        }else{
            abcd.style.display = 'none';
            showScore.innerHTML=`
                <h3> You Scored ${score}/${quizdb.length} </h3>
                <button class="btn" onclick= "location.reload()">Wanna Play Again</button>
            `;
            showScore.classList.remove('scoreArea');
            
        }
    });