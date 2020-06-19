$(document).ready(function () {

    //use moment.js to create variable for current day and time

    let currentDateEl = moment().format("MMMM Do YYYY, h:mm:ss a");
    $("#currentDay").text(currentDateEl);

    //set variable to compare past, present and future textarea color

    let checkTime = moment().format("HH");

    //array of objects to pull for the JSON calls and set to local storage per each hour

    let workHours = [{
        id: "0",
        hour: "09",
        time: "09",
        ante_post: "am",
        info: "",
    },
    {
        id: "1",
        hour: "10",
        time: "10",
        ante_post: "am",
        info: "",
    },
    {
        id: "2",
        hour: "11",
        time: "11",
        ante_post: "am",
        info: "",
    },
    {
        id: "3",
        hour: "12",
        time: "12",
        ante_post: "pm",
        info: "",
    },
    {
        id: "4",
        hour: "01",
        time: "13",
        ante_post: "pm",
        info: "",
    },
    {
        id: "5",
        hour: "02",
        time: "14",
        ante_post: "pm",
        info: "",
    },
    {
        id: "6",
        hour: "03",
        time: "15",
        ante_post: "pm",
        info: "",
    },
    {
        id: "7",
        hour: "04",
        time: "16",
        ante_post: "pm",
        info: "",
    },
    {
        id: "8",
        hour: "05",
        time: "17",
        ante_post: "pm",
        info: "",
    },
    ];

    //check to see if JSON object info is present in local storage 

    let tempWorkHours = localStorage.getItem("info")
    if (tempWorkHours) {
        workHours = JSON.parse(localStorage.getItem("info"))
    }

    // set the information in the textarea to local storage using JSON stringify of array

    function setInfo() {
        localStorage.setItem("info", JSON.stringify(workHours));
    }

    //display the information saved in the textarea using a loop through array 

    function displayInfo() {
        $.each(workHours, function (i, element) {
            $("#" + element.id).val(element.info)
        })
    }

    //parse out entire array and checkif there is information there else display it

    function init() {
        let storedInfo = JSON.parse(localStorage.getItem("hourly"));
        if (storedInfo) {
            hourly = storedInfo;
        }
        displayInfo();
    }

    // loop through workhours function of i and referred to as currentHour

    $.each(workHours, function (i, currentHour) {

        //set row element to form add class and append to DOM

        let rowEl = $("<form>");
        rowEl.addClass("row");
        $(".container").append(rowEl);

        //set div hour element add class and show formatted text of current hour to DOM

        let hourEl = $("<div>");
        hourEl.addClass("col-2 hour");
        hourEl.text(currentHour.hour + ":00" + " " + currentHour.ante_post);

        //set form element to div and add classes

        let formEl = $("<div>");
        formEl.addClass("col-8 form-group")

        //set planner description area to div and and classes

        let plannerEl = $("<div>");
        plannerEl.addClass("col-8 description p-0");

        //set textarea element to variable append to planner div

        let textAreaEl = $("<textarea>");
        plannerEl.append(textAreaEl);

        //set textarea element attribute and check if current time is past present or future

        textAreaEl.attr("id", currentHour.id);
        if (currentHour.time < checkTime) {
            textAreaEl.addClass("past");
        } else if (currentHour.time === checkTime) {
            textAreaEl.addClass("present");
        } else {
            currentHour.time > checkTime;
            textAreaEl.addClass("future");
        }

        //set save button element and add classes

        let saveBttn = $("<i></i>");
        saveBttn.addClass("far fa-save fa-lg");
        let savePlans = $("<button>");
        savePlans.addClass("col-2 saveBtn");

        //append save button, hour element, planner element to row element

        savePlans.append(saveBttn);
        rowEl.append(hourEl, plannerEl, savePlans);
    })

    // call initialization of JSON objects

    init();

    // click handler to grab the info from the textarea and save to info in the object into the array and then save to localsotrage

    $(".saveBtn").on("click", function (event) {
        event.preventDefault();

        //get the value of text and id

        let text = $(this).siblings(".description").children().val()
        let ids = $(this).siblings(".description").children().attr("id")

        // loop the local storage

        for (let i = 0; i < workHours.length; i++) {
            if (workHours[i].id === ids) {
                workHours[i].info = text;
                localStorage.setItem("info", JSON.stringify(workHours))
            }
        }
    })
});











