'use strict';

const LEN = 6;
const characters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j',
					'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't',
					'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D',
					'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N',
					'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X',
					'Y', 'Z']; //52

const getRandomChar = () => {
	return characters[Math.floor(Math.random() * characters.length)];
};

const generate = () => {
	const newId = [];
	for (let i = 0; i < LEN; i++) {
		newId.push(getRandomChar());
	}
	
	return newId.join('');
};

module.exports = {
	generate: generate
};