var started = false; 
var timer;
var time = 30; 
var intervalId
// end global variables 

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
    questionBtns();
    run();
});
// end start on click function 
function questionBtns () {
    var Btns = [];
    var questionA = $("#questionArea")
    var newBtn = $("<button>");
    for (i = 0; i < 4; i++) {
        Btns[i] = $("<button>").text('test'+i);
        // newBtn.text('test'+i);
        // Btns.push(newBtn);
        console.log(Btns);
    }
    console.log("this is when append happens");
    questionA.html(Btns);
};
// end trivia button populate function 
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