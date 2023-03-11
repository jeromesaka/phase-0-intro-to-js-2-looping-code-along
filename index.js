// Code your solutions in this file
const writeCards = (arr, msg) => {
	let result = [];
	for (let i = 0; i < arr.length; i++) {
		let message = `Thank you, ${arr[i]}, for the wonderful ${msg} gift!`;
		result.push(message);
	}
	return result;
};

const countDown = (num) => {
	while (num >= 0) {
		console.log(num);
		num--;
	}
};
