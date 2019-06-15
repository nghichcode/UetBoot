'use strict';
function excCode(c) {
	chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
		if (!tabs[0].url) {return;}
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

	var gacc,gpwd;
	chrome.storage.sync.get(['acc','pwd'], function(res) {
    gacc=res.acc?res.acc:'';gpwd=res.pwd?res.pwd:'';
    $("#acc").val(gacc);$("#pwd").val(gpwd);
  });
	$("#login").click(function() {
		$("#login").html("Wating 1s");
		
		var acc=$("#acc").val();var pwd=$("#pwd").val();if (!acc || !pwd) {$("#login").html("Retry");return;}
		if (gacc!=acc || gpwd!=pwd) {chrome.storage.sync.set({acc:acc,pwd:pwd});}

		var url='http://localhost/UetBoot/index.php';
		var c='window.location.href="'+url+'";';
		excCode(c);console.log("login");

		setTimeout(function(){pst();},1000);
		function pst(){
			$.post(url,{user:acc,password:pwd},function(data,status) {
				if (status=='success') {
					excCode('cc=function() {console.log('+data+')};cc();');
					$("#login").html("Loaded");
				} else {$("#login").html("ResErr! Retry");}
			}).fail(function() {
		    console.log("NetErr! Retry");
		  });
		}
	});


});