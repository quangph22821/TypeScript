const ArrNum2 = [4,1,8,6,28,15,-19,-1]
const ArrStr = ["a","ed","bc","ff"]

// ArrNum2.sort((a,b)=>{
//     return a-b
// })
// console.log(ArrNum2);

 const selectionSort = function <A>(arr:A[], callback ?:(a:A ,b:A) => number ) : A[]{
    if(!callback){
        callback = (a:A, b:A): number =>{
            if(a>b){
                return 1
            }else{
                return -1
            }
        }
    }
    for(let i =0;i<arr.length-1;i++){
        for(let j=i +1; j< arr.length; j++){
            if(callback (arr[i], arr[j]) < 0){
                [arr[j], arr[i]] = [arr[i], arr[j]]
            }
        }
    }
    return arr
}

selectionSort(ArrNum2) 
console.log(ArrNum2);
selectionSort(ArrStr)
console.log(ArrStr);

 




