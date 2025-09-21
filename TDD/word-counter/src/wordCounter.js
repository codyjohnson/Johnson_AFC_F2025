module.exports = wordCounter;

function wordCounter(input) {
    if (typeof input !== "string") return 0;

    if (input.trim() === "") return 0;

    input = input.replace(/[^a-zA-Z0-9\s]/g, ' ');

    return input.trim().split(/\s+/).length;
}