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
    correctA:0},
    3: {question: 'What Anime is This Background Image From?',
    a:['My Name', 'Your Name', 'Our Name', 'The Name'],
    correctA:1}
};
var imageIndex = ['<br><img src="assets/images/1.png" alt="leaf village">',
                    '<br><img src="assets/images/2.jpg" alt="uchiha sasuke">',
                    '<br><img src="assets/images/background.png" alt="your name">'];
var correctIndex;
var qC = 1; 
var imgI = 0;
var won = false;
var correct = 0;
var incorrect = 0;
var notry = 0;
// end global variables 

$(document).ready(function() {
    $(".y").hide();
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
        correct++;
    }
    if (this.id != correctIndex){
    wrong();
    incorrect++;
    }
});
// end on click check for correct answer

$(document).on("click", "#restart", function() {
   reset();
});
// end restart click 

function wrong () {
    stop();
    $("#answers").html('<p>The Correct Answer Was '+trivia[qC-1].a[correctIndex]+'</p>' + imageIndex[imgI]);
    setTimeout(answerBtns, 2400);
    setTimeout(questionGen, 2500);
    setTimeout(function(){imgI++},100);
    end();

};
// end wrong guess function - runs if incorrect answer was clicked. 

function lose () {
    $("#answers").html('');
    $("#questionArea").html('<h1> SORRY YOUVE RAN OUT OF TIME </h1>' 
        + '<p>The Correct Answer Was '+trivia[qC-1].a[correctIndex]+'</p>' + imageIndex[imgI]);
    setTimeout(answerBtns, 2400);
    setTimeout(questionGen, 2500);
    setTimeout(function(){imgI++},100);
    notry++;
    end();

};
// end lose function - runs if time runs out. 

function reset () {
    if(won) {
    correctIndex;
    qC = 1; 
    imgI = 0;
    won = false;
    correct = 0;
    incorrect = 0;
    notry = 0;
    setTimeout(answerBtns, 100);
    setTimeout(questionGen, 120);
    }
};
// end reset function - runs when restart is clicked 

function end () {
  if (qC == 4)  {
      won = true; 
      setTimeout(function(){
      $("#questionArea").html('<h1>THIS IS THE END</h1>');
      $("#answers").html(
                        '<p>Correct Guesses: '+ correct + '</p>'+
                        '<p>Incorrect Guesses: ' + incorrect +'</p>'+
                        '<p>No attempt made: ' + notry + '</p><br>' +
                        '<button id="restart">Restart</button>');
    },4400);
    }
};
// end end function and create restart button if questioncount reaches max index

function correctAnswer() {
    $("#questionArea").html('<p>Correct it is '+trivia[qC-1].a[correctIndex]+'</p>' + imageIndex[imgI]);
    $("#answers").html('');
    stop();
    end();
    setTimeout(answerBtns, 1900);
    setTimeout(questionGen, 2000);
    setTimeout(function(){imgI++},100);
};
// end correct answer response pop

function answerBtns() {
    var y; 
    var Btns = [];
    var answerA = $("#answers");
    for (i = 0; i < 4; i++) {
        y= trivia[qC].a[i];
        Btns[i] = $("<button>").text(y).attr("id",i).addClass('answers');
    } // end for loop
    correctIndex = trivia[qC].correctA;
    answerA.html(Btns);
    run();
};
// end trivia answers button populate function

function questionGen() {
    var x = trivia[qC].question;
    var questionA = $("#questionArea");
    questionA.html('<p>'+ x + '</p>');
    qC++;
};
// end trivia question generator

function run() {
    clearInterval(intervalId);
    intervalId = setInterval(decrease, 1000);
};
// end run function for timer 

function decrease() {
    time--; 
    $("span#timer").html(time);
    if (time <= 0) {
        stop();
        lose();
    }
};
// end interval decrease and populate function for timer 

function stop() { 
    intervalId = clearInterval(intervalId);
    time = 30; 
    $("span#timer").html(time);
};
// end stop timer function also resets timer and populates