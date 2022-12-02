import fs from 'fs';

const input = fs.readFileSync('./input.txt', { encoding: 'utf-8' });

let elves = [];

let elf = { calories: [], totalCalories: 0 };
input.split('\n').forEach((line) => {
	if (line.length === 1) {
		elves.push(elf);
		elf = { calories: [], totalCalories: 0 };
	} else {
		const kcal = Number.parseInt(line);
		elf.calories.push(kcal);
		elf.totalCalories += kcal;
	}
});
elves.push(elf); // Push last elf

elves = elves.sort((a, b) => b.totalCalories - a.totalCalories);

// Part 1

const mostCalories = elves[0];
console.log(mostCalories.totalCalories);

// Part 2

let topThreeCalories = 0;
for (let i = 0; i < 3; i++) {
	topThreeCalories += elves[i].totalCalories;
}
console.log(topThreeCalories);
