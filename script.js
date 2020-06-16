$(document).ready(function () {
    let currentDateEl = moment().format("MMMM Do YYYY, h:mm:ss a");
    // console.log("current", currentDateEl);
    $("#currentDay").text(currentDateEl);
    let hourEl = moment().format('LT');
    //console.log("hour", hourEl);
    let numWrkHours = [1, 2, 3, 4, 5, 6, 7, 8];
    // let rowEl = $(".row");
    // let hourEl = $(".hour");
    // let formEl = $(".form-group");
    // let textAreaEl = $("textarea");
    // let saveBtn = $(".saveBtn");
    // let containDiv = $(".container");
    $.each(numWrkHours, function (i, hour) {
        let rowEl = $("<div>");
        rowEl.addClass("row");
        rowEl.addId(hour);
        let hourEl = $("<div>");
        hourEl.addClass("hour col-2");
        let formEl = $("<div>");
        formEl.addClass("col-8 form-group")
        let textAreaEl = $("textarea");
        textAreaEl.addClass("form-control bg-transparent border-0");
        textAreaEl.addId("textarea" + [i]);
        textAreaEl.name("textarea" + [i]);
        textAreaEl.placeholder("Inpur you calander entries here");
        textAreaEl.row("1");
        let saveBtn = $("<div>");
        saveBtn.addClass("col-2 saveBtn");
        saveBtn.type("submit");
        let bttn = ("<button>");
        bttn.addClass("btn btn-primary mb-2");
        bttn.text("save");
        rowEl.append("<div>");
        hourEl.append("<div>" + hour + "</div>");
        formEl.append("<div>");
        textAreaEl.append("textarea");
        saveBtn.apppend("<div>");

    });

});
// this will be a function that will append the container
//function appendText() {
  //  var txt1 = "<p>Text.</p>";        // Create text with HTML
  // var txt2 = $("<p></p>").text("Text.");  // Create text with jQuery
  //  var txt3 = document.createElement("p");
  //  txt3.innerHTML = "Text.";         // Create text with DOM
  //  $("body").append(txt1, txt2, txt3);   // Append new elements
 // }










