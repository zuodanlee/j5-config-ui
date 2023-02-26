const ledList = [
    {
        id: "green",
        color: "#70FF00"
    },
    {
        id: "yellow",
        color: "#FFF500"
    },
    {
        id: "blue",
        color: "#0057FF"
    }
];
populateLedCards()

function confirmConfiguration() {
    //
}

function populateLedCards() {
    let ledListView = document.getElementById("led-list");
    var newInnerHtml = "";

    ledList.forEach(led => {
        var tempInnerHtml = `<div class="led-card">
            <div class="d-flex gap-10 w-100">
                <select id="bus-stop-name-${led.id}" class="dropdownlist ddl-bus-details">
                    <option value="null" disabled selected>Bus stop name</option>
                </select>
                <select id="bus-no-${led.id}" class="dropdownlist ddl-bus-details">
                    <option value="null" disabled selected>Bus no.</option>
                </select>
            </div>
            <div>Bus coming in:</div>
            <div class="d-flex gap-10 w-100">
                <input id="min-${led.id}" class="numberbox nb-range" type="number" placeholder="3" min="0" max="99"/>
                <div class="d-flex align-items-center">-</div>
                <input id="max-${led.id}" class="numberbox nb-range" type="number" placeholder="5" min="0" max="99"/>
                <div class="d-flex align-items-center">mins</div>
            </div>
            <div class="led-label" id="led-label-${led.id}" style="background-color:${led.color}"></div>
        </div>`;

        newInnerHtml += tempInnerHtml;
    });

    ledListView.innerHTML = newInnerHtml;
}
