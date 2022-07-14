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

