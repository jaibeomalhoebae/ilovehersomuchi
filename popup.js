let changeColor = document.getElementById('GOGO');

let stop = document.getElementById('"STOP"');



changeColor.onclick = function(element) {
	chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
	  chrome.tabs.executeScript(
		  tabs[0].id,
		  {code: 'document.getElementsByTagName("body")[0].setAttribute("onclick","quiz.k60()")'});
		
	});
};

stop.onclick = function(element) {
	chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
	  chrome.tabs.executeScript(
		  tabs[0].id,
		  {code: 'document.getElementsByTagName("body")[0].setAttribute("onclick","console.log()")'});
		
	});
};
