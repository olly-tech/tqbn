
function checkAnswers() {
    let score=0;
    let result=0;

//variable to tell JS to go into the HTML, and find the quiz
let quiz1 = document.forms.quiz1.elements;

ans1 = quiz1.colour.value;
if (ans1=="pink") {
    score += 1;
}
else if (ans1=="yellow") {
    score += 2;
}
else if (ans1=="green") {
    score += 3;
}
else {
    score += 4;
}

ans2=quiz1.animal.value;
if (ans2=="gorilla") {
    score += 1;
}
else if (ans2=="red-panda") {
    score += 2;
}
else if (ans2=="jaguar") {
    score += 3;
}
else {
    score += 4;
}

ans3=quiz1.music.value;
if (ans3=="pop") {
    score += 1;
}
else if (ans3=="hiphop") {
    score += 2;
}
else if (ans3=="rock") {
    score += 3;
}
else {
    score += 4;
}

ans4=quiz1.hobby.value;
if (ans4=="walk") {
    score += 1;
}
else if (ans4=="read") {
    score += 2;
}
else if (ans4=="music") {
    score += 3;
}
else {
    score += 4;
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

function responsiveResult(x) {
    if (x.matches) {
        document.getElementById("result1-mobile").style.padding = "0.65em";
        document.getElementById("result1-mobile").innerHTML=text;
        document.getElementById("result1").style.display = "none";
        document.getElementById("result1-mobile").style.display = "block";
    } else {
        document.getElementById("result1").style.padding = "0.65em";
        document.getElementById("result1").innerHTML=text;
        document.getElementById("result1-mobile").style.display = "none";
        document.getElementById("result1").style.display = "block";

}}
const mediaObj = window.matchMedia("(max-width:600px)");
responsiveResult(mediaObj);
mediaObj.addEventListener("change", function() {
    responsiveResult(mediaObj);
})
}
