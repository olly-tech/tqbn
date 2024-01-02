
let score = "0";

function checkAnswers() {
    let score=0;
    let result=0;

//variable to tell JS to go into the HTML, and find the quiz
let quiz1 = document.forms.quiz1.elements;

ans1 = quiz1.colour.value;
if (ans1=="pink") {
    score = score + 1;
}
else if (ans1=="yellow") {
    score = score + 2;
}
else if (ans1=="green") {
    score = score + 3;
}
else {
    score = score + 4;
}

ans2=quiz1.animal.value;
if (ans2=="gorilla") {
    score = score + 1;
}
else if (ans2=="red-panda") {
    score = score + 2;
}
else if (ans2=="jaguar") {
    score = score + 3;
}
else {
    score = score + 4;
}

ans3=quiz1.music.value;
if (ans3=="pop") {
    score = score + 1;
}
else if (ans3=="hiphop") {
    score = score + 2;
}
else if (ans3=="rock") {
    score = score + 3;
}
else {
    score = score + 4;
}

ans4=quiz1.hobby.value;
if (ans4=="walk") {
    score = score + 1;
}
else if (ans4=="read") {
    score = score + 2;
}
else if (ans4=="music") {
    score = score + 3;
}
else {
    score = score + 4;
}

if(score<6){
    result="Against the Stars by Christopher Hartland";
} else if(score<10){
    result="The Atlas Six by Olivie Blake";
} else if(score<13){
    result="Song of Achilles by Madeline Miller";
} else {
    result="The Charm Offensive by Alison Cochrun";
}

let text = "You should read: " + result;
document.getElementById("result1").innerHTML=text;
}
