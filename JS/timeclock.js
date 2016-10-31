// Timeclock in JS
function startTime() {
var today = new Date();

var h = today.getHours();
var m = today.getMinutes();
var s = today.getSeconds();
var ms = today.getMilliseconds();
var ampm = isAMorPM(h);
m = checkTime(m);
s = checkTime(s);
document.getElementById("time").innerHTML = h + ":" + m + ":" + s + ":" + ms + " - " + ampm;
setTimeout(startTime, 500);
}

function isAMorPM(i) {
	var val;
	if (i >= 12) {
		val = "PM" 
	} else {
	 	val = "AM"
}
return val;
}

// add zero in front
function checkTime(i) {
	if (i < 10) {i = "0" + i};
	return i;
}

// add daybreak
var today = new Date();
var hour = today.getHours();
var greeting;

if (hour >= 18) {	
	greeting = "Good evening!";
}else if (hour >= 12) {
	greeting = "Good afternoon!";
}else if (hour >= 0) {
	greeting = "Good morning!";
}else {
	greeting = "Welcome!";
}
	
document.getElementById ("greeting").innerHTML = greeting;

// Timeclock in jQuery

// $(document).ready(function() {
// 	function startTime() {
// 	var today = new Date();
// 	var h = today.getHours();
// 	var m = today.getMinutes();
// 	var s = today.getSeconds();
// 	var ms = today.getMilliseconds();
// 	var ampm = isAMorPM(h);
// 	m = checkTime(m);
// 	s = checkTime(s);
// 	$("#time").html(h + ":" + m + ":" + s + ":" + ms + " / " + ampm);
// 	setTimeout(startTime, 500);
// 	}

// 	function isAMorPM(i) {
// 		var val;
// 		if (i >= 12) {
// 			val = "PM" 
// 		} else {
// 		 	val = "AM"
// 		}
// 		return val;
// }

// // add zero in front
// function checkTime(i) {
// 	if (i < 10) {i = "0" + i};
// 	return i;
// }

// 	startTime();

// });

