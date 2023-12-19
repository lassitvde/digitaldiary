$(document).ready(function () {
    $("#addCustomOption").on("click", function () {
        // Get the value from the custom option input field
        var customOptionValue = $("#customOption").val();

        // Create a new checkbox
        var checkbox = $("<input>").attr({
            type: "checkbox",
            name: "options",
            value: customOptionValue
        });

        // Create a new label for the custom option
        var label = $("<label>").attr("for", customOptionValue).text(customOptionValue);

        // Create a new div for the checkbox and label
        var div = $("<div>").append(checkbox, label);

        // Append the div to the container div
        $("#checkboxContainer").append(div);

        // Clear the custom option input field
        $("#customOption").val("");
    });
});

//css style changes

function updateTimeStyles() {
    const currentTime = new Date().getHours();
    const body = document.body;

    //test time based design::
    // const currentTime = 19;

    // var headerDiv = document.getElementById('header');
    // var imageDiv= document.getElementById('image');

    //check if time is being retrieved correctly
    console.log(currentTime);

    if (currentTime >= 6 && currentTime < 12) {
        // Morning
        body.classList.remove('night', 'day');
        body.classList.add('morning');
        document.getElementById("header").innerHTML = "🌄 good morning 🌄";

        $(".titlebar").css(
            "background-color", "#9fd1c7"
        );

        $("header").css({
            "background-color": "#fdd5b5",
            "color": "#4ABBB5"
        });
        $("body").css({
            "background": "linear-gradient(to right, pink, skyblue)",
            "color": "#CB3075"
        });
        $(".titlebar").css(
            "background-color", "#89cde4"
        );
        $("#weather").css(
            "background", "linear-gradient(to bottom right, #eef1da, #F6D7E3)"
        );
        $(".y2k").css(
            "box-shadow", "5px 5px #de778a"
        );
        $("#clockWindow").css(
            "background", "linear-gradient(to top left, #F6D7E3, #e4d4e1)"
        );
        $("#reminders").css(
            "background", "linear-gradient(to right, #FAF7D8, #E2F6EF)"
        );
        $("#checkboxContainer").css(
            "color", "#6C448B"
        );
        $("#diary").css(
            "background", "linear-gradient(to top left, #ffe9f9, #fffce9, #E9F9FF)"
        );

        $("#calendar").css(
            "background-color", "#F8F1D6"
        );
        $("#spotify").css(
            "background-color", "#ffefe9"
        );

        document.getElementById("mainImageFile").src = "./images/morning.jpg";

        // document.getElementsByClassName("y2k").box-shadow = "5px 5px #7262d4;";

    } else if (currentTime >= 12 && currentTime < 18) {
        // Day
        body.classList.remove('night', 'morning');
        body.classList.add('day');
        document.getElementById("header").innerHTML = "☀️ good afternoon ☀️";
        $("header").css({
            "background-color": "#fb9ce3",
            "color": "#fff"
        });
        $("body").css({
            "background": "linear-gradient(to right, skyblue, #f8f1ae)",
            "color": "#5343c0"
        });
        $(".titlebar").css(
            "background-color", "#fbea5e"
        );
        $("#weather").css(
            "background", "linear-gradient(to bottom right, #eef1da, #eef3f4)"
        );
        $(".y2k").css(
            "box-shadow", "5px 5px #7262d4"
        );
        $("#clockWindow").css(
            "background", "linear-gradient(to top left, #e2e8c2, #e4d4e1)"
        );
        $("#reminders").css(
            "background", "linear-gradient(to right, #a4cbed, #fdd9f5)"
        );
        $("#checkboxContainer").css(
            "color", "#6C448B"
        );
        $("#diary").css(
            "background", "linear-gradient(to top left, #97cac3, #fdd9f5, #faa0e6)"
        );

        $("#calendar").css(
            "background-color", "#ecadf4"
        );
        $("#spotify").css(
            "background-color", "#f4d58c"
        );
        // body.style.background = "linear-gradient(to right, skyblue, #f8f1ae)";

        document.getElementById("mainImageFile").src = "./images/afternoon.jpg"
    } else {
        // Night
        body.classList.remove('morning', 'day');
        body.classList.add('night');
        document.getElementById("header").innerHTML = "🌕 good night 🌕";

        $(".titlebar").css(
            "background-color", "#9fd1c7"
        );

        $("header").css({
            "background-color": "#ed006c",
            "color": "#fcdf10"
        });
        $("body").css({
            "background": "linear-gradient(to right, #1D0C26, #210d2a)",
            "color": "#98F4F3"
        });
        $(".titlebar").css(
            "background-color", "#fa08c7"
        );
        $("#weather").css({
            "background": "linear-gradient(to bottom right, #f3a2c3, #d6bfe8)",
            "color": "#cd1658"
        });
        $(".y2k").css(
            "box-shadow", "5px 5px #01cefb"
        );
        $("#clockWindow").css(
            "background", "linear-gradient(to top left, #253aa2, #752990)"
        );
        $("#reminders").css(
            "background", "linear-gradient(to right, #3749ac, #051b97)"
        );
        $("#checkboxContainer").css(
            "color", "#d1b2f3"
        );
        $("#diary").css(
            "background", "linear-gradient(to top left, #e989f5, #408bef,#6f4eb7)"
        );

        $("#calendar").css(
            "background-color", "#2C0120"
        );
        $("#spotify").css(
            "background-color", "#e43bdb"
        );

        
        document.getElementById("mainImageFile").src = "./images/night.jpg"

    }
}

//clock

function clock() {
    const today = new Date();

    // get time components
    const hours = today.getHours();
    const minutes = today.getMinutes();
    const seconds = today.getSeconds();

    //add '0' to hour, minute & second when they are less 10
    const hour = hours < 10 ? "0" + hours : hours;
    const minute = minutes < 10 ? "0" + minutes : minutes;
    const second = seconds < 10 ? "0" + seconds : seconds;

    //12-hour time clock
    const hourTime = hour > 12 ? hour - 12 : hour;

    // if (hour === 0) {
    //   hour = 12;
    // }
    //assigning 'am' or 'pm' to indicate time of the day
    const ampm = hour < 12 ? "AM" : "PM";

    // get date components
    const month = today.getMonth();
    const year = today.getFullYear();
    const day = today.getDate();

    //declaring a list of months in a year
    const monthList = [
        "JAN",
        "FEB",
        "MAR",
        "APR",
        "MAY",
        "JUN",
        "JUL",
        "AUG",
        "SEP",
        "OCT",
        "NOV",
        "DEC"
    ];

    //get current date and time
    const date = monthList[month] + " " + day + ", <br/>" + year + "<br/>";
    const time = hourTime + ":" + minute + ":" + second + " " + ampm;

    //combine current date and time
    const dateTime = date + " " + time;

    //print current date and time to the DOM
    document.getElementById("clock").innerHTML = dateTime;
    setTimeout(clock, 1000);
}

// update styles initially
updateTimeStyles();
clock();

// update styles every min
setInterval(updateTimeStyles, 60000);
// console.log(document.getElementById("editor").innerHTML);

