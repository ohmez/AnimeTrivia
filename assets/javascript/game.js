var started = false; 
var timer;
var time = 30; 
var intervalId
var trivia = {
    1: {question: 'What village is Naruto From?', 
    a:['The Village', 'The Village People', 'Village Hidden in The Leaf', 'Village Hidden in The Fog'],
    correctA:2},
    2: {question: 'What Clan is Sasuke From',
    a:['The Uchiha', 'The Huyiga', 'The Village', 'The Sharingan'],
    correctA:0}
};
var imageIndex = ['<br><div style="block"><img src="assets/images/1.png" alt="leaf village"></div>', '<br><img src="assets/images/2.jpg" alt="uchiha sasuke">'];
var correctIndex;
var qC = 1; 
var imgI = 0;
// end global variables 
console.log(trivia[1]);

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
        correctAnswer();
    }
    
});
// end on click check for correct answer
function correctAnswer() {
    $("#questionArea").html('<p>Correct it is '+trivia[qC-1].a[correctIndex]+'</p>' + imageIndex[imgI]);
    $("#answers").html('');
    stop();
    setTimeout(answerBtns, 2000);
    setTimeout(questionGen, 2000);
    setTimeout(function(){imgI++},100);
    
};
// end correct answer response pop
function answerBtns() {
    var y; 
    var Btns = [];
    var answerA = $("#answers");
    var newBtn = $("<button>");
    for (i = 0; i < 4; i++) {
        y= trivia[qC].a[i];
        Btns[i] = $("<button>").text(y).attr("id",i).addClass('answers');
    } // end for loop
    correctIndex = trivia[qC].correctA;
    console.log(Btns);
    console.log(correctIndex);
    answerA.html(Btns);
};
// end trivia answers button populate function 
function questionGen() {
    var x = trivia[qC].question;
    console.log(x);
    var questionA = $("#questionArea");
    questionA.html('<p>'+ x + '</p>');
    qC++;
    console.log(qC);

};
// end trivia question generator
function run() {
    intervalId = setInterval(decrease, 1000);
};
// end run function for timer 
function decrease() {
    time--; 
    $("span#timer").html(time);
    if (time <= 0) {
        stop();
    }
};
// end interval decrease and populate function for timer 
function stop() { 
    intervalId = clearInterval(intervalId);
    time = 30; 
    $("span#timer").html(time);
};
// end stop timer function also resets timer and populates