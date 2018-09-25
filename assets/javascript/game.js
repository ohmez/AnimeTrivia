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
    correctA:1},
    4: {question: 'What Anime has All Might as a main character?',
    a:['Naruto', 'Bleach', 'Your Name', 'My Hero Academia'],
    correctA:3},
    5: {question: 'What Anime is Kira from?',
    a:['Your Name', 'Death Note', 'The Alchemist', 'Magi'],
    correctA:1}
};
var imageIndex = ['<br><img src="assets/images/1.png" alt="leaf village">',
                    '<br><img src="assets/images/2.jpg" alt="uchiha sasuke">',
                    '<br><img src="assets/images/background.png" alt="your name">',
                    '<br><img src="assets/images/3.jpg" alt="All-Might_My-Hero-Academia">',
                    '<br><img src="assets/images/4.jpg" alt="Kira_Death-Note">'];
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
    $("#answers").html('<p>The Correct Answer Was '+trivia[qC-1].a[correctIndex]+'</p>');
    $("#imageArea").html(imageIndex[imgI]);
    setTimeout(answerBtns, 2900);
    setTimeout(questionGen, 3000);
    setTimeout(function(){imgI++},100);
    end();

};
// end wrong guess function - runs if incorrect answer was clicked. 

function lose () {
    $("#answers").html('');
    $("#questionArea").html('<h1> SORRY YOUVE RAN OUT OF TIME </h1>' 
        + '<p>The Correct Answer Was '+trivia[qC-1].a[correctIndex]+'</p>');
    $("#imageArea").html(imageIndex[imgI]);
    setTimeout(answerBtns, 2900);
    setTimeout(questionGen, 3000);
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
    $(".timer").show();
    setTimeout(answerBtns, 100);
    setTimeout(questionGen, 120);
    }
};
// end reset function - runs when restart is clicked 

function end () {
  if (qC == 6)  {
      won = true; 
      setTimeout(function(){
      $(".timer").hide();
      $("#questionArea").html('<h1>THANKS FOR PLAYING!</h1>');
      $("#answers").html('<div>'+
                        '<p style="margin-left: 12vw;">Correct Guesses: '+ correct + '</p>'+
                        '<p style="margin-left: 12vw;">Incorrect Guesses: ' + incorrect +'</p>'+
                        '<p style="margin-left: 12vw;">No attempt made: ' + notry + '</p><br>' +
                        '<button id="restart">Restart</button></div>');
    },5400);
    }
};
// end end function and create restart button if questioncount reaches max index

function correctAnswer() {
    $("#answers").html('<p>Correct it is '+trivia[qC-1].a[correctIndex]+'</p>');
    $("#imageArea").html(imageIndex[imgI]);
    stop();
    end();
    setTimeout(answerBtns, 2900);
    setTimeout(questionGen, 3000);
    setTimeout(function(){imgI++},100);
};
// end correct answer response pop

function answerBtns() {
    $("#imageArea").empty();
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