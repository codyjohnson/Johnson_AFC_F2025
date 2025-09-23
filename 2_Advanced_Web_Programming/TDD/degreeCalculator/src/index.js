
const convertToCelsius = (degree) => {

    if (typeof degree !== 'number' || isNaN(degree)) {
        return false;
    }

    return (degree - 32) * (5/9);
}

const convertToFahrenheit = (degree) => {

    if (typeof degree !== 'number' || isNaN(degree)) {
        return false;
    }

    return (degree * 9/5) + 32;
}

module.exports = {
    convertToCelsius,
    convertToFahrenheit
}