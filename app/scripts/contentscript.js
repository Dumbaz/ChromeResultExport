'use strict';

console.log('\'Allo \'Allo! Content script');

chrome.browserAction.onClicked.addListener(function(tab){ 
	console.log('Hello');
});