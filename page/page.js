'use strict';
function excCode(c) {
	chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
	  var currTab = tabs[0].id;chrome.tabs.executeScript(currTab,{code:c});
	});
}
$(document).ready(function(){
	$("#rate_5").click(function() {
		// var s=5;$("tr.raterow").each(function(i,e){$(e).children()[s+1].click();});
		var c='var s=5;document.querySelectorAll("tr.raterow").forEach(function(e,i){e.children[s+1].click();});';
		excCode(c);console.log("rate_5");
  	// window.close();
	});
	$("#rate_5r").click(function() {
		// $("tr.raterow").each(function(i,e){var s=Math.floor(Math.random()*5)+1;$(e).children()[s+1].click();});
		var c='document.querySelectorAll("tr.raterow").forEach(function(e,i){var s=Math.floor(Math.random()*5)+1;e.children[s+1].click();});';
		excCode(c);console.log("5r");
	});
	$("#rate_eq").click(function() {
		var s=parseInt($("#sel").val());if(!s){return;}
		// $("tr.raterow").each(function(i,e){$(e).children()[s+1].click();});
		var c='var s='+s+';document.querySelectorAll("tr.raterow").forEach(function(e,i){e.children[s+1].click();});';
		excCode(c);console.log("eq");
	});
	$("#rate_ge").click(function() {
		var s=parseInt($("#sel").val());if(!s){return;}
		// $("tr.raterow").each(function(i,e){var sr=Math.floor(Math.random()*(6-s))+s;$(e).children()[sr+1].click();})
		var c='document.querySelectorAll("tr.raterow").forEach(function(e,i){var sr=Math.floor(Math.random()*(6-'+s+'))+'+s+';e.children[sr+1].click();});';
		excCode(c);console.log("rate_ge");
	});
});