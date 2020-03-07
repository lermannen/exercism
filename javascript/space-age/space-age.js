export const age = (planet, seconds) => {
    let age = calculate_age(planet, seconds);
    return round_to_two_decimals(age);
};

const round_to_two_decimals = (num) => {
    return Math.round((num + Number.EPSILON) * 100) / 100;
};

const calculate_age = (planet, seconds) => {
    return seconds/SECONDS_PER_YEAR_ON_EARTH/orbital_period_in_earth_years[planet];
};

const SECONDS_PER_YEAR_ON_EARTH = 31557600;

const orbital_period_in_earth_years = {
    "mercury": 0.2408467,
    "venus": 0.61519726,
    "earth": 1.0,
    "mars": 1.8808158,
    "jupiter": 11.862615,
    "saturn": 29.447498,
    "uranus": 84.016846,
    "neptune": 164.79132
}
