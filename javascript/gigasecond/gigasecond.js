export const gigasecond = date => {
    let result = new Date(date);
    result.setUTCSeconds( date.getUTCSeconds() + Math.pow(10, 9));
    return result;
};
