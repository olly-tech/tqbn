console.log("hello");

let score = "0";

function checkAnswers() {
    let score=0;
    let result=0;

//variable to tell JS to go into the HTML, and find the quiz
let quiz = document.forms.quiz.elements;

answer1=quiz.colour.value;
if (answer1=="pink") {
    score = score + 1;
}
if (answer1=="blue") {
    score = score + 2;
}
if (answer1=="yellow") {
    score = score + 3;
}
if (answer1=="green") {
    score = score + 4;
}

answer2=quiz.animal.value;
if (answer2=="red-panda") {
    score = score + 1;
}
if (answer2=="gorilla") {
    score = score + 2;
}
if (answer2=="jaguar") {
    score = score + 3;
}
if (answer2=="giraffe") {
    score = score + 4;
}

answer3=quiz.music.value;
if (answer3=="pop") {
    score = score + 1;
}
if (answer3=="hiphop") {
    score = score + 2;
}
if (answer3=="rock") {
    score = score + 3;
}
if (answer3=="metal") {
    score = score + 4;
}

answer4=quiz.hobby.value;
if (answer4=="walk") {
    score = score + 1;
}
if (answer4=="read") {
    score = score + 2;
}
if (answer4=="music") {
    score = score + 3;
}
if (answer4=="exercise") {
    score = score + 4;
}

if(score<6){
    result="Book1";
} else if(score<10){
    result="Book2";
} else if(score<13){
    result="Book3";
} else {
    result="Book4";
}

let text = "You should read..." + result;
document.getElementById("answer").innerHTML=text;
}
/*

*/