$(document).ready(function () {
    let currentDateEl = moment().format("MMMM Do YYYY, h:mm:ss a");
    // console.log("current", currentDateEl);
    $("#currentDay").text(currentDateEl);
    let hourEl = moment().format('LT');
    console.log("hour", hourEl);












});