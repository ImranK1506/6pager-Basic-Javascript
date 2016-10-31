function myDetect() {
	var BrwsName;
	var OSName;
	var WinSize;
}
    document.getElementById("BrwsName").innerHTML = "You are browsing with " + navigator.appName;
    document.getElementById("OSName").innerHTML = "Plugged in on your " + navigator.platform;
    document.getElementById("WinSize").innerHTML = "Can you even view this with " + window.innerWidth + " pixels" + "?";


function myResize() {
	var w = window.outerWidth;
	var h = window.outerHeight;
	var o = "Check you out resizing at " + w + " pixels " + h + " pixels ";

	document.getElementById("ReSize").innerHTML = o;
}
  	
  myResize();