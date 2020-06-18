$(document).ready(function () {

    let currentDateEl = moment().format("MMMM Do YYYY, h:mm:ss a");
    $("#currentDay").text(currentDateEl);
    let checkTime = moment().format("HH");


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

    var tempWorkHours = localStorage.getItem("info")
    if (tempWorkHours) {
        workHours = JSON.parse(localStorage.getItem("info"))
    }


    function setInfo() {

        localStorage.setItem("info", JSON.stringify(workHours));
    }


    function displayInfo() {

        $.each(workHours, function (i, element) {
            $("#" + element.id).val(element.info)
        })
    }
    function init() {
        let storedInfo = JSON.parse(localStorage.getItem("hourly"));
        if (storedInfo) {
            hourly = storedInfo;
        }

        displayInfo();
    }

    $.each(workHours, function (i, currentHour) {
        let rowEl = $("<form>");
        rowEl.addClass("row");
        $(".container").append(rowEl);

        let hourEl = $("<div>");
        hourEl.addClass("col-2 hour");
        hourEl.text(currentHour.hour + ":00" + " " + currentHour.ante_post);

        let formEl = $("<div>");
        formEl.addClass("col-8 form-group")

        let plannerEl = $("<div>");
        plannerEl.addClass("col-8 description p-0");


        let textAreaEl = $("<textarea>");
        plannerEl.append(textAreaEl);
        textAreaEl.attr("id", currentHour.id);
        if (currentHour.time < checkTime) {
            textAreaEl.addClass("past");
        } else if (currentHour.time === checkTime) {
            textAreaEl.addClass("present");
        } else {
            currentHour.time > checkTime;
            textAreaEl.addClass("future");
        }
        let saveBttn = $("<i></i>");
        saveBttn.addClass("far fa-save fa-lg");
        let savePlans = $("<button>");
        savePlans.addClass("col-2 saveBtn");

        savePlans.append(saveBttn);
        rowEl.append(hourEl, plannerEl, savePlans);
    })

    init();

    // save just grab the ifno from the textare and save th info in the object into the array and then save the localsotrage

    $(".saveBtn").on("click", function (event) {
        event.preventDefault();
        //console.log(this)
        let text = $(this).siblings(".description").children().val()
        let ids = $(this).siblings(".description").children().attr("id")
        //console.log(text, ids);

        // loop the local storage
        for (let i = 0; i < workHours.length; i++) {
            if (workHours[i].id === ids) {
                workHours[i].info = text;
                localStorage.setItem("info", JSON.stringify(workHours))
            }

        }

    })
});











