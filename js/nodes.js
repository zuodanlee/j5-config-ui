const busStopList = [];
// updateBusStopListView();

function getBusStop(reqBusStopNo) {
    // 1. Call J5 backend API that returns a JSON string of the requested bus stop

    // 2. Convert JSON string into JSON object

    // 3. Return converted JSON object
}

function addBusStop() {
    let reqBusStopNo = document.getElementById("bus-stop-no");
    let reqBusStop = getBusStop(reqBusStopNo);
    busStopList.push(reqBusStop);
    updateBusStopListView();
}

function hideEmptyPlaceholder() {
    document.getElementById("empty-placeholder").style.display = "none";
}

function showEmptyPlaceholder() {
    document.getElementById("empty-placeholder").style.display = "flex";
}

function hideBusStopList() {
    document.getElementById("bus-stop-list").style.display = "none";
}

function showBusStopList() {
    document.getElementById("bus-stop-list").style.display = "flex";
}

function toggleEmptyPlaceholder() {
    if (busStopList.length > 0) {
        hideEmptyPlaceholder();
        showBusStopList();
    } else {
        showEmptyPlaceholder();
        hideBusStopList();
    }
}

function updateBusStopListView() {
    toggleEmptyPlaceholder();
    let busStopListView = document.getElementById("bus-stop-list");
    var newInnerHtml = "";

    busStopList.forEach(busStop => {
        var tempInnerHtml = `<div class="bus-stop-card">
            <div class="bus-stop-icon">
                <img class="bus-icon" src="images/bus-icon.svg"/>
            </div>
            <div class="bus-stop-details">
                <div class="bus-stop-description">${busStop.Description}</div>
                <div class="bus-stop-roadname">${busStop.RoadName}</div>
            </div>
        </div>`;

        newInnerHtml += tempInnerHtml;
    });

    busStopListView.innerHTML = newInnerHtml;
}

function addBusStopDemo() {
    if (busStopList.length == 0) {
        busStopList.push(
            {
                BusStopCode: "61079",
                RoadName: "Potong Pasir Ave 1",
                Description: "Blk 121"
            },
            {
                BusStopCode: "61089",
                RoadName: "Potong Pasir Ave 3",
                Description: "Bet Blks 138/144"
            }
        );
    } else {
        busStopList.pop();
        busStopList.pop();
    }
    updateBusStopListView();
}
