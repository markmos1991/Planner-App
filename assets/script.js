


var root =  $('#root');

// Time in Jumbo
var today = moment();
$("#currentDay").text(today.format("D MMM YYYY"));



// create 9 time blocks for the working day using a for loop
function createTimeBlocks() {

for (var i = 9; i < 18; i++) {
  var timeBlock = $("<div>");
  root.append(timeBlock);
  timeBlock.addClass("time-block");
  
// create a div within the timeBlock for the hour
  var hourDiv = $("<div>");
  hourDiv.addClass("hour col-2");
  hourDiv.text(i + ":00");
  timeBlock.append(hourDiv);

//   create a div inside the timeblock for the input form with a space of col-10
  var inputDiv = $("<div>");
  inputDiv.addClass("textarea col-10");
  timeBlock.append(inputDiv);



}
}


createTimeBlocks();