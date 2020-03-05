export const translate = (input = "") => {
    if (input === "") {
	return [];
    }

    let result = [];
    for(const protein of input.match(/.{1,3}/g).map(trans)) {
	if (protein === "STOP") break;
	result.push(protein);
    };
    return result;

};

var translation = {
    "AUG": "Methionine",
    "UUC": "Phenylalanine",
    "UUU": "Phenylalanine",
    "UUA": "Leucine",
    "UUG": "Leucine",
    "UCU": "Serine",
    "UCC": "Serine",
    "UCA": "Serine",
    "UCG": "Serine",
    "UAU": "Tyrosine",
    "UAC": "Tyrosine",
    "UGU": "Cysteine",
    "UGC": "Cysteine",
    "UGG": "Tryptophan",
    "UAA": "STOP",
    "UAG": "STOP",
    "UGA": "STOP",
};

const trans = input => {
    if (translation[input] === undefined) throw new Error("Invalid codon");
    return translation[input];
};
