//Find and Search for the best way to detect if the array has duplicates or not
const array = [2, 4, [22, "test"], false, null, {a: 2}, [22, "Test"], "Null"];

function hasDuplicates(arr) {
    return arr.some((item, index) => arr.indexOf(item) !== index);
}


