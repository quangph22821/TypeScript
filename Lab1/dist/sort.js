var ArrNum2 = [4, 1, 8, 6, 28, 15, -19, -1];
var ArrStr = ["a", "ed", "bc", "ff"];
ArrNum2.sort(function (a, b) {
    return a - b;
});
// console.log(ArrNum2);
function selectionSort(arr, callback) {
    for (var i = 0; i < arr.length - 1; i++) {
        for (var j = i + 1; j < arr.length; j++) {
            if (callback(arr[i], arr[j])) {
                var temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
}
selectionSort(ArrStr, function (a, b) {
    return a > b;
});
console.log(ArrStr);
selectionSort(ArrNum2, function (a, b) {
    return a > b;
});
console.log(ArrNum2);
