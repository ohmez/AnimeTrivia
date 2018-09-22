var started = false; 
var timer;
var time = 30; 
var intervalId
var trivia = {
    q1: {question: 'What village is Naruto from?', 
        a:['The Village', 'The Village People', 'Village Hidden in The Leaf', 'Village Hidden in The Fog']
        }
    };
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
    console.log(started);
    answerBtns();
    run();
    questionGen();
});
// end start on click function 
function answerBtns () {
    var Btns = [];
    var answerA = $("#answers");
    var newBtn = $("<button>");
    for (i = 0; i < 4; i++) {
        Btns[i] = $("<button>").text(trivia.q1.a[i]);
        // newBtn.text('test'+i);
        // Btns.push(newBtn);
        console.log(Btns);
    }
    console.log("this is when append happens");
    answerA.html(Btns);
};
// end trivia button populate function 
function questionGen () {
    var questionA = $("#questionArea");
    questionA.html('<p>'+ trivia.q1.question + '</p>');
};
function run() {
    intervalId = setInterval(decrease, 1000);
    console.log(intervalId);
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
    console.log(intervalId);
    time = 30; 
    $("span#timer").html(time);
};
// end stop timer function also resets timer and populates