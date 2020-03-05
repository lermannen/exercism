export const translate = (input = "") => {
    if (input === "") {
	return [];
    }

    let results = input.match(/.{1,3}/g).map(trans);
    let res = [];
    for(let e in results) {
	if (results[e] === "STOP") break;
	res.push(results[e]);
    };
    return res;

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
