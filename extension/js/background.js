// Global accessor that the popup uses.
var variable1 = null;

console.log('background.js');

chrome.browserAction.onClicked.addListener(function(tab) {
	console.log('openExtensionManager', tab);
});
