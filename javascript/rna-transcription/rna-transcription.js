export const toRna = input => {
    if (input.length === 0) return input
    return input.split('').map(nucleotide => CONVERSION[nucleotide]).join('');
};

const CONVERSION = {
    "G": "C",
    "C": "G",
    "T": "A",
    "A": "U"
};
