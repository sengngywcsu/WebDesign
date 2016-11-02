function looper() {
	//get vaule from the input
	var From = document.getElementById("hourFrom").value;
	var To = document.getElementById("hourTo").value;
	var generateResult = []; //array
	var result;
	for (var i = 0; i < 7; i++) {
		var hours = generateRandomNumber(From, To);
		var mins = generateRandomNumber(00, 59);
		//("0" + mins).slice(-2) .... making 2 digit
		generateResult[i] = (hours + ":" + ("0" + mins).slice(-2));
	}
	result = generateResult.join("<br>"); //adding break between the array
	document.getElementById("display").innerHTML = result; //display on the html
}
//Random Number Generator from min to max (all included)
function generateRandomNumber(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1)) + min;
}