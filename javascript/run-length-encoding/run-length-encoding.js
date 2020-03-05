export const encode = string => {
    if (string.length === 0) return '';
    return string.match(/(.)\1{0,}/g).map(a => {
	if (a.length > 1) return `${a.length}${a[0]}`
	return a }).join('');
};

export const decode = string => {
    if (string.length === 0) return '';
    return string.match(/([a-zA-Z ]|\d{0,}.)/g).map(a => {
	if (a.length > 1) return a[a.length - 1].repeat(a.slice(0, a.length - 1));
	return a }).join('');

};
