export const age = (planet, seconds) => {
    let age = age_in_earth_years(seconds)/orbital_period_in_earth_years[planet];;
    return Number(age.toFixed(2));
};

const age_in_earth_years = (seconds) => {
    return seconds/SECONDS_PER_YEAR_ON_EARTH;
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
