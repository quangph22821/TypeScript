const ArrNum2 = [4,1,8,6,28,15,-19,-1]
const ArrStr = ["a","ed","bc","ff"]

ArrNum2.sort((a,b)=>{
    return a-b
})
// console.log(ArrNum2);

function selectionSort<A>(arr:A[], callback :(a:A ,b:A) => boolean ){
    for(let i =0;i<arr.length-1;i++){
        for(let j=i +1; j< arr.length; j++){
            if(callback (arr[i], arr[j])){
                let temp = arr[i]
                arr[i] = arr[j]
                arr[j] = temp
            }
        }
    }
}

selectionSort<string>(ArrStr,(a,b) =>{
    return a>b
})
console.log(ArrStr)

selectionSort<number>(ArrNum2,(a,b) =>{
    return a>b
})
console.log(ArrNum2);




