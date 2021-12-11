let toggleNavStatus1 = false;

function toggleNav1() {
    let getSidebar = document.querySelector(".nav-sidebar1");
    let getSidebarUl = document.querySelector(".nav-sidebar1 ul");
    let getSidebarTitle = document.querySelector(".nav-sidebar1 span");
    let getSidebarLinks = document.querySelectorAll(".nav-sidebar1 a");

    if (toggleNavStatus1 === false) {
        getSidebarUl.style.visibility = "visible";
        getSidebar.style.width = "275px";
        getSidebarTitle.style.opacity = "0.8";

        let arrayLength = getSidebarLinks.length;
        for (let i = 0; i < arrayLength; i++) {
            getSidebarLinks[i].style.opacity = "1";
        }

        toggleNavStatus1 = true;
    }

    else if (toggleNavStatus1 === true) {
        getSidebar.style.width = "59px";
        getSidebarTitle.style.opacity = "0";

        let arrayLength = getSidebarLinks.length;
        for (let i = 0; i < arrayLength; i++) {
            getSidebarLinks[i].style.opacity = "0";
        }

        getSidebarUl.style.visibility = "hidden";

        toggleNavStatus1 = false;
    }
}

function changeColor(color) {
    document.body.style.background = color;
}

function cyanRun() {
    changeColor('cyan');
    document.getElementById("cyan").checked = true;
}

function magentaRun() {
    changeColor('magenta');
    document.getElementById("magenta").checked = true;
}

function yellowRun() {
    changeColor('yellow');
    document.getElementById("yellow").checked = true;
}


function greenRun() {
    changeColor('green');
    document.getElementById("green").checked = true;
}


function purpleRun() {
    changeColor('purple');
    document.getElementById("purple").checked = true;
}


function orangeRun() {
    changeColor('orange');
    document.getElementById("orange").checked = true;
}

let toggleNavStatus2 = false;

let toggleNav2 = function () {
    let getSidebar2 = document.querySelector(".nav-sidebar2");
    let getSidebarUl2 = document.querySelector(".nav-sidebar2 ul");
    let getSidebarTitle2 = document.querySelector(".nav-sidebar2 span");
    let getSidebarLinks2 = document.querySelectorAll(".nav-sidebar2 a");

    if (toggleNavStatus2 === false) {
        getSidebarUl2.style.visibility = "visible";
        getSidebar2.style.width = "275px";
        getSidebarTitle2.style.opacity = "0.8";

        let arrayLength = getSidebarLinks2.length;
        for (let i = 0; i < arrayLength; i++) {
            getSidebarLinks2[i].style.opacity = "1";
        }

        toggleNavStatus2 = true;
    }

    else if (toggleNavStatus2 === true) {
        getSidebar2.style.width = "59px";
        getSidebarTitle2.style.opacity = "0";

        let arrayLength = getSidebarLinks2.length;
        for (let i = 0; i < arrayLength; i++) {
            getSidebarLinks2[i].style.opacity = "0";
        }

        getSidebarUl2.style.visibility = "hidden";

        toggleNavStatus2 = false;
    }

    document.getElementById("whiteText").onclick = function () {
        document.getElementById("output").style.color = 'white';
        document.getElementById("whiteText").onclick = toggleNav2()
    }

    document.getElementById("whiteText2").onclick = function () {
        document.getElementById("output").style.color = 'white';
        document.getElementById("whiteText").checked = true;
        document.getElementById("whiteText").onclick = toggleNav2()
    }
    document.getElementById("blackText").onclick = function () {
        document.getElementById("output").style.color = 'black';
        document.getElementById("blackText").onclick = toggleNav2()
    }

    document.getElementById("blackText2").onclick = function () {
        document.getElementById("output").style.color = 'black';
        document.getElementById("blackText").checked = true;
        document.getElementById("blackText").onclick = toggleNav2()
    }
}