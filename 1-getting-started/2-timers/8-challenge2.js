
let count = 0;
function printer(){
	console.log('Hello World');
	count++;
	if (count > 4) {
		clearInterval(paper);
		console.log("Done");
	}
}

const paper = setInterval(printer, 1000);




// Print "Hello World"
// Every second
// And stop after 5 times

// After 5 times. Print "Done" and let Node exit.
