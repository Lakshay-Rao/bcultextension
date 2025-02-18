chrome.runtime.onInstalled.addListener(() => {
    console.log('Firewall Auto-Fill Extension Installed!');
    chrome.storage.local.set({
        username: "your_username",
        password: "your_password"
    });
});