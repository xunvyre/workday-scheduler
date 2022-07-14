var hourlyEvents = {};

//date display
var currentDate = moment().format('dddd, MMM Do YYYY');
$("#currentDay").html(currentDate);

//activate save button to save to local storage
$(".saveBtn").on("click", function ()
{
    var text = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");

    localStorage.setItem(time, text);
});

//get events from storage to display
var getEvents = function()
{

}

//change textarea colors based on time
var colorTracker = function()
{

}