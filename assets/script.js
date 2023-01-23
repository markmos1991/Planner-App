


var root =  $('#root');

// Time in Jumbo
var today = moment();
$("#currentDay").text(today.format("D MMM YYYY"));


 // get the current hour and compare it to the hour div time
 function checkTime(){
    var now = moment();
    var hour = now.hours();
    var hourDivValue = parseInt($(hourDiv).text()) // get the hour value from hourDiv
    // turn class on and off for future/present
    if (hour === hourDivValue) { 
    hourDiv.addClass("present");
    } 
    else if (hour < hourDivValue) {
    hourDiv.addClass("future");
    } else {
        hourDiv.addClass("past");
    }
}



// create 9 time blocks for the working day using a for loop
function createTimeBlocks() {

for (var i = 9; i < 18; i++) {
  var timeBlock = $("<div>");
  root.append(timeBlock);
  timeBlock.addClass("time-block");
  
// The hour div
  
  var hourDiv = $("<div>");
  hourDiv.addClass("hour col-1");
  var hour = moment().hour(i).format("h A");
  hourDiv.text(hour);
  timeBlock.append(hourDiv);

//  div inside the timeblock for the input 
  var inputDiv = $("<input>");
  inputDiv.addClass("textarea past col-8");
// create event listener for on click to enter text?


  timeBlock.append(inputDiv);
// Button div for saving to local storage
  var buttonDiv = $("<button>");
  buttonDiv.addClass("saveBtn col-2");
  buttonDiv.text("Save");
  timeBlock.append(buttonDiv);

}
}

createTimeBlocks();




// on save button click, save the text from textarea to local storage
// function?
// persist?
$("saveBtn").click(function(){
     
    // add parent second child data to loacal storage so it stays in the textarea





    // code to execute when button is clicked

});