var ArrNum2 = [4, 1, 8, 6, 28, 15, -19, -1];
var ArrStr = ["a", "ed", "bc", "ff"];
// ArrNum2.sort((a,b)=>{
//     return a-b
// })
// console.log(ArrNum2);
var selectionSort = function (arr, callback) {
    var _a;
    if (!callback) {
        callback = function (a, b) {
            if (a > b) {
                return 1;
            }
            else {
                return -1;
            }
        };
    }
    for (var i = 0; i < arr.length - 1; i++) {
        for (var j = i + 1; j < arr.length; j++) {
            if (callback(arr[i], arr[j]) < 0) {
                _a = [arr[i], arr[j]], arr[j] = _a[0], arr[i] = _a[1];
            }
        }
    }
    return arr;
};
selectionSort(ArrNum2);
console.log(ArrNum2);
selectionSort(ArrStr);
console.log(ArrStr);
