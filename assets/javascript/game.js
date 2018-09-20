// first step is to populate the page
started = false; 
function start () {
    var startBtn = $('<button/>', {
        text: 'Start', //set text 1 to 10
        id: 'start',
        class: 'col',
        style: 'margin-left: 23.7vw; margin-top: 22vh;',
        click: function () { 
            started = true;
            console.log(start); }
        });
    $(".container").html(startBtn);
    
    
}; 
// end start function
console.log(started);

$(document).ready(function() {
    start();
    
    console.log($(".container"));
    
    
    
    
});
// end doc.ready