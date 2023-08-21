const host = "http://127.0.0.1:3000";

function clickDownloadButton() {
    chrome.tabs.query({'active' : true, 'windowId': chrome.windows.WINDOW_ID_CURRENT}, (tabs) => {
        const url = tabs[0].url;
        const downloadUrl = `${host}/download_chrome_ex?videoUrl=${url}`;
        chrome.tabs.create({url: downloadUrl});
    });
}

window.onload = () => {
    document.getElementById("dl-button").onclick = clickDownloadButton;
}