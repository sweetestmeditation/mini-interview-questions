// pairSum.js

function pairSum(array, k) {
    const seen = new Set();
    const pairs = [];

    for (const num of array) {
        const complement = k - num;
        if (seen.has(complement)) {
            pairs.push([num, complement]);
        }
        seen.add(num);
    }

    return pairs;
}

module.exports = pairSum; // Export the pairSum function

