var hour = 8;
var minute = 30;
var period = "AM";

var when;

if (period == "AM") {
	when = "Morning";
}
else if (period == "PM") {
	when = "Evening";
}

if (minute < 30) {
	console.log("It is just after ", hour, " in the ", when);
}

else if (minute > 30) {
	console.log("It is almost ", hour+1, " in the ",  when);
}

else {
	console.log("It is half past ", hour);
}
