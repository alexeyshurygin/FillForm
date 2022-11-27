function fillFormClicked() {
    browser.tabs.query({currentWindow: true, active: true}, function (tabs) {
        var activeTab = tabs[0];
        browser.tabs.sendMessage(activeTab.id, {"message": "fill"});
    });
}

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("fillButton").addEventListener("click", fillFormClicked);
});