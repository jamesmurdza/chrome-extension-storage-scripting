chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.action == "runScript") {
        chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
            chrome.scripting.executeScript({
                target: { tabId: tabs[0].id, allFrames: true },
                func: function () {
                    console.log(window.location.href);
                    document.forms[0].submit()
                }
            });
        });
    }
});