/*
    A - Rock
    B - Paper
    C - Scissors

    X - Lose
    Y - Draw
    Z - Win

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
	B: 'paper',
	C: 'scissors',
};

const wins = {
	rock: 'paper',
	paper: 'scissors',
	scissors: 'rock',
};

const results = {
	X: (shape) => Object.keys(wins)[Object.values(wins).indexOf(shape)],
	Y: (shape) => shape,
	Z: (shape) => wins[shape],
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
		mineShape = results[shapes[1].replace(/(\r\n|\n|\r)/gm, '')](elfShape);

	let gamePoints = 0;
	if (elfShape === mineShape) gamePoints = 3;
	else if (wins[elfShape] === mineShape) {
		gamePoints += 6; // Game points
	}
	gamePoints += shapePoints[mineShape]; // Shape points

	totalPoints += gamePoints;
});

console.log('Total points:', totalPoints);
