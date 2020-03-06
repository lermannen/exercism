export const gigasecond = date => {
    let result = new Date();
    result.setTime( date.getTime() + Math.pow(10, 12));
    return result;
};
