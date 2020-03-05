export const isArmstrongNumber = number => {
    let num = number.toString();
    let length = num.length;
    let result = num.split('').reduce((acc, n) => acc + Math.pow(n, length), 0);
    return number === result;
};
