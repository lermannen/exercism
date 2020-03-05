export const translate = (input = "") => {
    if (input === "") {
	return [];
    } else {
	let results = input.match(/.{1,3}/g).map(trans);
	let res = [];
	for(let e in results) {
	    if (results[e] === "STOP") { break; }
	    res.push(results[e]);
	};
	return res;
    };
};

const trans = (input) => {
    if (input == "AUG") {
	return "Methionine";
    } else if (input == "UUC" || input == "UUU") {
	return "Phenylalanine";
    } else if (input == "UUA" || input == "UUG") {
	return "Leucine";
    } else if (input == "UCU" || input == "UCC" || input == "UCA" || input == "UCG") {
	return "Serine";
    } else if (input == "UAU" || input == "UAC") {
	return "Tyrosine";
    } else if (input == "UGU" || input == "UGC") {
	return "Cysteine";
    } else if (input == "UGG") {
	return "Tryptophan";
    } else if (input == "UAA" || input == "UAG" || input == "UGA") {
	return "STOP";
    } else {
	throw new Error("Invalid codon");
    }
};
    
