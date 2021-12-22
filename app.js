var arr = [1, 2, 3, -1, -2, -3];
function filterArr(array) {
    var exampleArr = [];
    if (array.length === 0)
        return "array is empty";
    for (var _i = 0, array_1 = array; _i < array_1.length; _i++) {
        var i = array_1[_i];
        if (i > 0) {
            exampleArr.push(i);
        }
    }
    if (exampleArr.length > 0) {
        return exampleArr;
    }
    else {
        return null;
    }
}
;
console.log(filterArr(arr));
