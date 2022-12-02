import fs from 'fs';

const input = fs.readFileSync('./input.txt', { encoding: 'utf-8' });

let elves = [];

let elf = { calories: 0 };
input.split('\n').forEach((line) => {
	if (line.length === 1) {
		elves.push(elf);
		elf = { calories: 0 };
	} else {
		const kcal = Number.parseInt(line);
		elf.calories += kcal;
	}
});
elves.push(elf); // Push last elf

elves = elves.sort((a, b) => b.calories - a.calories);

// Part 1

const mostCalories = elves[0];
console.log(mostCalories.calories);

// Part 2

let topThreeCalories = 0;
for (let i = 0; i < 3; i++) {
	topThreeCalories += elves[i].calories;
}
console.log(topThreeCalories);
