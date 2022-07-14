var hourlyEvents = {};

//date display
var currentDate = moment().format('dddd, MMM Do YYYY');
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
    var now = moment().hour();
    console.log(now);
    
    $(".time-block").each(function ()
    {
        var descTime = parseInt($(this).attr("id").split("hour"));

        if (descTime < now)
        {
            $(".description").removeClass("future");
            $(".description").removeClass("present");
            $(".description").addClass("past");
        }
        else if (descTime === now)
        {
            $(".description").removeClass("past");
            $(".description").removeClass("future");
            $(".description").addClass("present");
        }
        else
        {
            $(".description").removeClass("present");
            $(".description").removeClass("past");
            $(".description").addClass("future");
        }

    });
};

colorTracker();
getDesc();

