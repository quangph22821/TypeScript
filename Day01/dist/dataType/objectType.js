// Array
var arr1 = ["a", "b", "c", "d", "e"];
var arr2 = [[1, 2, 3], [4, 5, 6],];
var arr3 = ["a", "b", "c", "d"];
//Tuples 
var tuple = ["QuangHX", "Ha Nam", 20];
tuple.push("1213");
console.log(tuple);
//Enum
var STATUS;
(function (STATUS) {
    STATUS[STATUS["PENDING"] = 0] = "PENDING";
    STATUS[STATUS["REJECTED"] = 1] = "REJECTED";
    STATUS[STATUS["FULFILED"] = 2] = "FULFILED";
})(STATUS || (STATUS = {}));
var trangthai1 = STATUS.PENDING;
console.log(trangthai1);
var CODE;
(function (CODE) {
    CODE[CODE["SUCCESS"] = 200] = "SUCCESS";
    CODE[CODE["CILENT_ERROR"] = 400] = "CILENT_ERROR";
    CODE[CODE["SERVER_ERROR"] = 500] = "SERVER_ERROR";
})(CODE || (CODE = {}));
var error = CODE.CILENT_ERROR;
console.log(error);
//FunCTIONS
var upperCase = function (a) {
    if (typeof a == "string") {
        console.log(a.toUpperCase);
    }
};
////////////////////
var hobbies = ['spring', 'java'];
console.log.apply(console, hobbies);
