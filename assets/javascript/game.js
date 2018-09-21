// first step is to populate the page
var started = false; 
var timer;
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