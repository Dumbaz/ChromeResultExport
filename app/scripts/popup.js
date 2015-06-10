'use strict';

console.log('\'Allo \'Allo! Popup');

chrome.tabs.getSelected(null, function(tab) { 
	fetchResultsFrom(tab.url);
	
});

function fetchResultsFrom(url) { 
	document.body.querySelector('h1').innerHTML = url;
	var response = loadXMLDoc(url);
	console.log(response);
}

function loadXMLDoc(url)
{
var xmlhttp;
if (window.XMLHttpRequest)
  {// code for IE7+, Firefox, Chrome, Opera, Safari
  xmlhttp=new XMLHttpRequest();
  }
else
  {// code for IE6, IE5
  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  }
xmlhttp.onreadystatechange=function()
  {
  if (xmlhttp.readyState==4 && xmlhttp.status==200)
    {
    return xmlhttp.responseText;
    }
  }
xmlhttp.open("GET",url,true);
xmlhttp.send();
}