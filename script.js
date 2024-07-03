let navBar = document.querySelector(".navBar");
let body = document.querySelector("body");
let notNavBar = document.querySelector(".notNavBar");

let resumeHover = document.querySelector(".resumeHover");

resumeHover.addEventListener("mouseover", function () {

    resumeHover.style = "font-size: 25px";
    

});

resumeHover.addEventListener("mouseout", function() {
    resumeHover.style = "font-color: none";
});

let projectOne = document.querySelector("#projectOne");
let projectTwo = document.querySelector("#projectTwo");
let projectThree = document.querySelector("#projectThree");
let projectSpanOne = document.querySelector(".projectSpanOne");
let projectSpanTwo = document.querySelector(".projectSpanTwo");
let projectSpanThree = document.querySelector(".projectSpanThree");

projectOne.addEventListener("mouseover", function () {
    projectSpanOne.style = "display: block";
    projectSpanTwo.style = "display: none";
    projectSpanThree.style = "display: none";
    projectOne.style = "opacity: 1.0";
    projectTwo.style = "opacity: 0.1";
    projectThree.style = "opacity: 0.1";
});

projectTwo.addEventListener("mouseover", function () {
    projectSpanTwo.style = "display: block";
    projectSpanOne.style = "display: none";
    projectSpanThree.style = "display: none";
    projectOne.style = "opacity: 0.1";
    projectTwo.style = "opacity: 1.0";
    projectThree.style = "opacity: 0.1";
});

projectThree.addEventListener("mouseover", function () {
    projectSpanThree.style = "display: block";
    projectSpanOne.style = "display: none";
    projectSpanTwo.style = "display: none";
    projectOne.style = "opacity: 0.1";
    projectThree.style = "opacity: 1.0";
    projectTwo.style = "opacity: 0.1";
});

let homeButton = document.querySelector(".homeButton")