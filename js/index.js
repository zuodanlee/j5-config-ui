const pages = ["home", "nodes", "led-mode", "led-instructions"];

function getCurrentPath() {
    return window.location.pathname;
}

function loadStylesheets(currentPage) {
    pages.forEach(page => {
        if (page == currentPage) {
            document.getElementById("css-" + page).disabled = false;
        } else {
            document.getElementById("css-" + page).disabled = true;
        }
    });
}

function home() {
    history.replaceState(null, "", "home");
    var url = window.location.protocol + "//" + window.location.host + "/pages/home";
    fetch(url).then((response) => response.text()).then((text) => {
        loadStylesheets("home");
        document.body.innerHTML = text;
        document.title = "J5 Bus Arrival Config";
    }).catch(function(err) {
        console.log('Oops, something went wrong!', err);
    });
}

function nodes() {
    history.replaceState(null, "", "nodes");
    var url = window.location.protocol + "//" + window.location.host + "/pages/nodes";
    fetch(url).then((response) => response.text()).then((text) => {
        loadStylesheets("nodes");
        document.body.innerHTML = text;
        updateBusStopListView();
        document.title = "J5 Bus Arrival Config - Nodes";
    }).catch(function(err) {
        console.log('Oops, something went wrong!', err);
    });
}

function ledMode() {
    history.replaceState(null, "", "led-mode");
    var url = window.location.protocol + "//" + window.location.host + "/pages/led-mode";
    fetch(url).then((response) => response.text()).then((text) => {
        loadStylesheets("led-mode");
        document.body.innerHTML = text;
        document.title = "J5 Bus Arrival Config - LED Mode";
    }).catch(function(err) {
        console.log('Oops, something went wrong!', err);
    });
}

function ledInstructions() {
    history.replaceState(null, "", "led-instructions");
    var url = window.location.protocol + "//" + window.location.host + "/pages/led-instructions";
    fetch(url).then((response) => response.text()).then((text) => {
        loadStylesheets("led-instructions");
        document.body.innerHTML = text;
        populateLedCards();
        document.title = "J5 Bus Arrival Config - LED Instructions";
    }).catch(function(err) {
        console.log('Oops, something went wrong!', err);
    });
}

home();

// switch (getCurrentPath()) {
//     case "/":
//         var url = window.location.protocol + "//" + window.location.host + "/pages/home";
//         fetch(url).then((response) => response.text()).then((text) => {
//             document.body.innerHTML = text;
//             document.title = "J5 Bus Arrival Config";
//             disableAllStylesheets();
//             document.getElementById("css-home").disabled = false;
//             document.getElementById("js-home").disabled = false;
//         }).catch(function(err) {
//             console.log('Oops, something went wrong!', err);
//         });
//         break;

//     case "/nodes":
//         var url = window.location.protocol + "//" + window.location.host + "/pages/nodes";
//         fetch(url).then((response) => response.text()).then((text) => {
//             document.body.innerHTML = text;
//             document.title = "J5 Bus Arrival Config - Nodes";
//             disableAllStylesheets();
//             document.getElementById("css-nodes").disabled = false;
//             document.getElementById("js-nodes").disabled = false;
//             updateBusStopListView();
//         }).catch(function(err) {
//             console.log('Oops, something went wrong!', err);
//         });
//         break;

//     case "/led-mode":
//         var url = window.location.protocol + "//" + window.location.host + "/pages/led-mode";
//         fetch(url).then((response) => response.text()).then((text) => {
//             document.body.innerHTML = text;
//             document.title = "J5 Bus Arrival Config - LED Mode";
//             disableAllStylesheets();
//             document.getElementById("css-led-mode").disabled = false;
//             document.getElementById("js-led-mode").disabled = false;
//         }).catch(function(err) {
//             console.log('Oops, something went wrong!', err);
//         });
//         break;

//     case "/led-instructions":
//         var url = window.location.protocol + "//" + window.location.host + "/pages/led-instructions";
//         fetch(url).then((response) => response.text()).then((text) => {
//             document.body.innerHTML = text;
//             document.title = "J5 Bus Arrival Config - LED Instructions";
//             disableAllStylesheets();
//             document.getElementById("css-led-instructions").disabled = false;
//             document.getElementById("js-led-instructions").disabled = false;
//             populateLedCards();
//         }).catch(function(err) {
//             console.log('Oops, something went wrong!', err);
//         });
//         break;

//     default:
//         break;
// }
