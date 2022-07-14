//date display
var currentDate = moment().format('dddd, MMMM Do');
$("#currentDay").html(currentDate);

//activate save button to save to local storage
$(".saveBtn").on("click", function ()
{
    var taskDesc = $(this).siblings(".description").val();
    var descTime = $(this).parent().attr("id");

    localStorage.setItem(descTime, taskDesc);
});

//get events from storage to display
var getDesc = function()
{
    $("#8am .description").val(localStorage.getItem("8am"));
    $("#9am .description").val(localStorage.getItem("9am"));
    $("#10am .description").val(localStorage.getItem("10am"));
    $("#11am .description").val(localStorage.getItem("11am"));
    $("#12pm .description").val(localStorage.getItem("12pm"));
    $("#1pm .description").val(localStorage.getItem("1pm"));
    $("#2pm .description").val(localStorage.getItem("2pm"));
    $("#3pm .description").val(localStorage.getItem("3pm"));
    $("#4pm .description").val(localStorage.getItem("4pm"));
    $("#5pm .description").val(localStorage.getItem("5pm"));
    $("#6pm .description").val(localStorage.getItem("6pm"));
};

//change textarea colors based on time
var colorTracker = function()
{
    var now = moment().hour();  //get the hour
    console.log(now);
    
    $(".time-block").each(function ()   //loop through the time-block class
    {
        var descTime = parseInt($(this).attr("id").split("hour")); //convert the id to a number to compare to the current time

        if (descTime < now)     //if the hour has passed, add the past class
        {
            $(".description").removeClass("future");
            $(".description").removeClass("present");
            $(".description").addClass("past");
        }
        else if (descTime === now)      //if the hour is current, add the present class
        {
            $(".description").removeClass("past");
            $(".description").removeClass("future");
            $(".description").addClass("present");
        }
        else    //if the hour hasn't passed, add the future class
        {
            $(".description").removeClass("present");
            $(".description").removeClass("past");
            $(".description").addClass("future");
        }

    });
};

//call functions to run on page load
colorTracker();
getDesc();

