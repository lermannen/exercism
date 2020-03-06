export const gigasecond = date => {
    const gigasecond_in_ms = Math.pow(10, 12);
    return new Date(date.getTime() + gigasecond_in_ms);
};
