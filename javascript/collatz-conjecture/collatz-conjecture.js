export const steps = (number = 0) => {
    if (number <= 0) throw new Error('Only positive numbers are allowed')
    let steps = 0;
    while (number != 1) {
	if (number % 2 == 0) number /= 2
	else number = 3 * number + 1
	steps += 1
    }
    return steps;
};
