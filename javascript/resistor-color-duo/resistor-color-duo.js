export const decodedValue = colors => {
    return parseInt(colors.slice(0, 2).map(c => COLORS.indexOf(c)).join(''));
};

export const COLORS = [
    "black",
    "brown",
    "red",
    "orange",
    "yellow",
    "green",
    "blue",
    "violet",
    "grey",
    "white"
];
