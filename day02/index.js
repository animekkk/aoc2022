/*
    A - Rock
    B - Paper
    C - Scissors

    X - Rock
    Y - Paper
    Z - Scissors

    1 - Rock
    2 - Paper
    3 - Scissors

    0 - Lost
    3 - Draw
    6 - Won
*/

import fs from 'fs';

const input = fs.readFileSync('./input.txt', { encoding: 'utf-8' });

const figures = {
	A: 'rock',
	X: 'rock',
	B: 'paper',
	Y: 'paper',
	C: 'scissors',
	Z: 'scissors',
};

const wins = {
	rock: 'paper',
	paper: 'scissors',
	scissors: 'rock',
};

const shapePoints = {
	rock: 1,
	paper: 2,
	scissors: 3,
};

let totalPoints = 0;

input.split('\n').forEach((line) => {
	const shapes = line.split(' ');
	const elfShape = figures[shapes[0]],
		mineShape = figures[shapes[1].replace(/(\r\n|\n|\r)/gm, '')];

	let gamePoints = 0;
	if (elfShape === mineShape) gamePoints = 3;
	else if (wins[elfShape] === mineShape) {
		gamePoints += 6; // Game points
	}
	gamePoints += shapePoints[mineShape]; // Shape points

	totalPoints += gamePoints;
});

console.log('Total points:', totalPoints);
