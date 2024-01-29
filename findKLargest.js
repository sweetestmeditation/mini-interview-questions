function findKLargest(array, k) {
    if (k <= 0) {
        return [];
    }

    // Sort the array in descending order
    const sortedArray = array.sort((a, b) => b - a);

    // Slice the first k elements from the sorted array
    return sortedArray.slice(0, k);
}

module.exports = findKLargest;

