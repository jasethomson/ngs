const theOneFunc = arg1 => {
	console.log(arg1);
};

setTimeout(theOneFunc, 4 * 1000, 'Hello');
setTimeout(theOneFunc, 8 * 1000, 'Hello');

// Hello after 4 seconds

// Hello after 8 seconds

// You can define only ONE function
