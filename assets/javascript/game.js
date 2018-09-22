var started = false; 
var timer;
var time = 30; 
var intervalId
var trivia = {
    q1: {question: 'What village is Naruto From?', 
    a:['The Village', 'The Village People', 'Village Hidden in The Leaf', 'Village Hidden in The Fog'],
    correctA:2},
    q2: {question: 'What Clan is Sasuke From',
    a:['The Uchiha', 'The Huyiga', 'The Village', 'The Sharingan'],
    correctA:0}
};
var correctIndex;
// end global variables 
console.log(trivia.q1);

$(document).ready(function() {
    $(".y").hide();
    console.log($(".container"));
});
// end doc.ready

$(document).on("click", "#startBtn", function() {
    $(".n").hide();
    $(".y").show();
    started = true; 
    answerBtns();
    run();
    questionGen();
});
// end start on click function 
$(document).on("click", ".answers", function() {
    if (this.id == correctIndex) {
        console.log(this.id);
        correctAnswer();
    }
    
});
function correctAnswer() {
    $("#questionArea").html('<p>Correct it is '+trivia.q1.a[correctIndex]+'</p>');
    $("#answers").html('');
    stop();
};
function answerBtns () {
    var Btns = [];
    var answerA = $("#answers");
    var newBtn = $("<button>");
    for (i = 0; i < 4; i++) {
        Btns[i] = $("<button>").text(trivia.q1.a[i]).attr("id",i).addClass('answers');
        // newBtn.text('test'+i);
        // Btns.push(newBtn);
    } // end for loop
    correctIndex = trivia.q1.correctA;
    console.log(Btns);
    console.log(correctIndex);
    answerA.html(Btns);
};
// end trivia answers button populate function 
function questionGen () {
    var questionA = $("#questionArea");
    questionA.html('<p>'+ trivia.q1.question + '</p>');
};
// end trivia question generator
function run() {
    intervalId = setInterval(decrease, 1000);
};
// end run function for timer 
function decrease () {
    time--; 
    $("span#timer").html(time);
    if (time <= 0) {
        stop();
    }
};
// end interval decrease and populate function for timer 
function stop () { 
    intervalId = clearInterval(intervalId);
    time = 30; 
    $("span#timer").html(time);
};
// end stop timer function also resets timer and populates