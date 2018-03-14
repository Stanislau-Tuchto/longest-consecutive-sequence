module.exports = function longestConsecutiveLength(array) {
    let set = new Set();
    let longestConsecutive = 0;
    let n = array.length;
    for (let i=0; i<n; ++i) {
        set.add(array[i]);
    }

    for (let i=0; i<n; ++i)
    {
        if (!set.has(array[i]-1))
        {
            let j = array[i];
            while (set.has(j))
                j++;
            if (longestConsecutive<j-array[i])
                longestConsecutive = j-array[i];
        }
    }
    return longestConsecutive;
}
