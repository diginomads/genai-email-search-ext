//example of using a message handler from the inject scripts

chrome.browserAction.onClicked.addListener(function (tab) {
  // Do something when the browser action is clicked
  console.log('Extension activated!');
});

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "openSettingsPage") {
    openUrlInNewTab(chrome.runtime.getURL("settings.html"));
  }
});

// Function to open URL in new tab
function openUrlInNewTab(url) {
  chrome.tabs.create({ url: url });
}