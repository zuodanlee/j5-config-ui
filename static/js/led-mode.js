const ledModeCardIds = ["informational-card", "instructional-card"];

function selectLedMode(selectedCardId) {
    let selectedCard = document.getElementById(selectedCardId);
    selectedCard.classList.add("selected-card");

    let selectedCardIdIndex = ledModeCardIds.indexOf(selectedCardId);
    var deselectCardId = "";
    if (selectedCardIdIndex == 0) {
        deselectCardId = ledModeCardIds[1];
    } else {
        deselectCardId = ledModeCardIds[0];
    }

    let deselectCard = document.getElementById(deselectCardId);
    deselectCard.classList.remove("selected-card");
}
