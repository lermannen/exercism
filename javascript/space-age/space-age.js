export const age = (planet, seconds) => {
    return +(seconds/SECONDS_PER_YEAR/factor[planet]).toFixed(2);
};

const SECONDS_PER_YEAR = 31557600;

const factor = {
    "mercury": 0.2408467,
    "venus": 0.61519726,
    "earth": 1.0,
    "mars": 1.8808158,
    "jupiter": 11.862615,
    "saturn": 29.447498,
    "uranus": 84.016846,
    "neptune": 164.79132
}
