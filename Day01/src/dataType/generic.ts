function showStringData(a) {
    return a;
}
function showNumberData(a) {
    return a;
}
function showData(a) {
    return a;
}
showData("string");

const arrNum = [1,2,3,5,8,13] //Fibonacci 
const arrStr = ["Quang",""]
// function we17304_map(arr: number[], callback: (item: number) => number): number[] {
//     let temp = []
//     for(let i = 0; i < arr.length; i++) {
//         const newItem = callback(arr[i])
//         temp.push(newItem)
//     }
//     return temp
// }

function we17304_map<A>(arr:A[], callback :(item: A)=>A) :A[]{
    let temp = []
    for(let i=0; i<arr.length; i++){
        const newItem = callback(arr[i])
        temp.push(newItem)
    }
    return temp
}

const kq = we17304_map(arrStr ,(item)=>{
    return item + " Ha Nam"
})

console.log(kq);
