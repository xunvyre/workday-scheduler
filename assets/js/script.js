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
    $("#8 .description").val(localStorage.getItem("8"));
    $("#9 .description").val(localStorage.getItem("9"));
    $("#10 .description").val(localStorage.getItem("10"));
    $("#11 .description").val(localStorage.getItem("11"));
    $("#12 .description").val(localStorage.getItem("12"));
    $("#13 .description").val(localStorage.getItem("13"));
    $("#14 .description").val(localStorage.getItem("14"));
    $("#15 .description").val(localStorage.getItem("15"));
    $("#16 .description").val(localStorage.getItem("16"));
    $("#17 .description").val(localStorage.getItem("17"));
    $("#18 .description").val(localStorage.getItem("18"));

    //grab jQ object value from local storage and attach it to the description with the matching id
    //$(id description).val(localStorage).getItem(id)
};

//change textarea colors based on time
var colorTracking = function()
{   
    $(".time-block").each(function()   //loop through the time-block class
    {
        var timeNow = moment().hour();  //get the hour
        var descTime = parseInt($(this).attr("id")); //convert the id to an interger
        //console.log(timeNow, descTime);
        
        if (descTime < timeNow)     //if the hour has passed, add the past class
        {
            $(this).removeClass("future");
            $(this).removeClass("present");
            $(this).addClass("past");
        }
        else if (descTime === timeNow)      //if the hour is current, add the present class
        {
            $(this).removeClass("past");
            $(this).removeClass("future");
            $(this).addClass("present");
        }
        else   //if the hour hasn't passed, add the future class
        {
            $(this).removeClass("present");
            $(this).removeClass("past");
            $(this).addClass("future");
        }
    });
};

//call functions to run on page load
colorTracking();
getDesc();

