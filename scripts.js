// Write your JavaScript code here.
// Remember to pay attention to page loading!
let takeoff = null;
let land = null;
let flightStatus = null;
let missionAbort = null;
let left = null;
let right = null;
let up = null;
let down = null;
let rocket = null;
let height = null;
let startingLeft = "45%";
let startingTop = "40%";

window.addEventListener("load", function() {
    console.log("window has loaded");
    takeoff = document.getElementById("takeoff");
    land = document.getElementById("landing")
    flightStatus = document.getElementById("flightStatus");
    missionAbort = document.getElementById("missionAbort");
    left = document.getElementById("left");
    right = document.getElementById("right");
    up = document.getElementById("up");
    down = document.getElementById("down");
    rocket = document.getElementById("rocket");
    height = document.getElementById("spaceShuttleHeight");
    rocket.style.left = startingLeft;
    rocket.style.top = startingTop;

    takeoff.addEventListener("click", function() {
        console.log("takeoff has been clicked")
        if(flightStatus.innerHTML != "Shuttle in flight." && window.confirm("Confirm that the shuttle is ready for takeoff.")){
            flightStatus.innerHTML = "Shuttle in flight.";
            document.getElementById("shuttleBackground").style.backgroundColor = "blue";
            height.innerHTML = 10000;
        }
    });
    
    land.addEventListener("click", function() {
        console.log("land has been clicked")
        if(flightStatus.innerHTML != "Space shuttle ready for takeoff" && flightStatus.innerHTML != "The shuttle has landed."){
            window.alert("The shuttle is landing. Landing gear engaged.")
            flightStatus.innerHTML = "The shuttle has landed.";
            document.getElementById("shuttleBackground").style.backgroundColor = "green";
            height.innerHTML = 0;
            //reset position
            rocket.style.left = startingLeft;
            rocket.style.top = startingTop;
        }
    });

    missionAbort.addEventListener("click", function() {
        console.log("missionAbort has been clicked")
        if(window.confirm("Confirm that you want to abort the mission.")){
            flightStatus.innerHTML = "Mission aborted";
            document.getElementById("shuttleBackground").style.backgroundColor = "green";
            height.innerHTML = 0;
            //reset position
            rocket.style.left = startingLeft;
            rocket.style.top = startingTop;
        }
    });

    left.addEventListener("click", function() {
        //console.log("left has been clicked");
        let percentLeft = Number(rocket.style.left.slice(0,-1));
        if(percentLeft > 0){
            rocket.style.left = String(percentLeft - 1) + "%";
        }
    });

    right.addEventListener("click", function() {
        //console.log("right has been clicked");
        let percentLeft = Number(rocket.style.left.slice(0,-1));
        if(percentLeft < 90){
            rocket.style.left = String(percentLeft + 1) + "%";
        }
    });

    up.addEventListener("click", function() {
        //console.log("up has been clicked");
        let percentTop = Number(rocket.style.top.slice(0,-1));
        if(percentTop > 2){
            height.innerHTML = Number(height.innerHTML) + 10000;
            rocket.style.top = String(percentTop - 2)+ "%";
        }

    });

    down.addEventListener("click", function() {
        //console.log("down has been clicked");
        let percentTop = Number(rocket.style.top.slice(0,-1));
        if(percentTop < 80) {
            height.innerHTML = Number(height.innerHTML) - 10000;
            rocket.style.top = String(percentTop + 2)+ "%";
        }
        
    });

    //emulate clicks with arrow keys or WASD

    document.addEventListener("keydown", function(event) {
        if(event.keyCode === 37 || event.keyCode === 65){
            event.preventDefault();
            left.click();
        }
    })

    document.addEventListener("keydown", function(event) {
        if(event.keyCode === 39 || event.keyCode === 68){
            event.preventDefault();
            right.click();
        }
    })

    document.addEventListener("keydown", function(event) {
        if(event.keyCode === 38 || event.keyCode === 87){
            event.preventDefault();
            up.click();
        }
    })

    document.addEventListener("keydown", function(event) {
        if(event.keyCode === 40 || event.keyCode === 83){
            event.preventDefault();
            down.click();
        }
    })


});
