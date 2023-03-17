// Object declaration
// Object literal
var sinhvien = {
    name: "Nam Cuong",
    age: 20
};
var sinhvien2 = {
    name: "Thành",
    age: 20
};
//////////////////////////////////////////////////
var ROLE;
(function (ROLE) {
    ROLE[ROLE["STAFF"] = 0] = "STAFF";
    ROLE[ROLE["MANAGER"] = 1] = "MANAGER";
    ROLE[ROLE["USER"] = 2] = "USER";
})(ROLE || (ROLE = {}));
