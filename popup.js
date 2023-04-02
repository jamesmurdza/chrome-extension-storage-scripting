const saveButton = document.getElementById("saveButton");
const runScriptButton = document.getElementById("runScriptButton");

const usernameField = document.getElementById("username");
const passwordField = document.getElementById("password");

saveButton.addEventListener("click", () => {
    const username = usernameField.value;
    const password = passwordField.value;

    chrome.storage.local.set({ username, password }, () => {
        console.log("User settings saved");
    });
});

chrome.storage.local.get(({ username, password}) => {
    usernameField.value = username || "";
    passwordField.value = password || "";
});

runScriptButton.addEventListener("click", () => {
    chrome.runtime.sendMessage({ action: "runScript" });
});
