'use strict';

console.log('\'Allo \'Allo! Popup');

chrome.tabs.getSelected(null, function(tab) { 
	fetchResultsFrom(tab.url);
	
});

function fetchResultsFrom(url) { 
	document.body.querySelector('h1').innerHTML = url;
}
