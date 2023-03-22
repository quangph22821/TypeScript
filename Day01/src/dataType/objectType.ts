// Array
 const arr1 :   Array<string> =["a", "b", "c", "d", "e"];

const arr2 : number[][] =[[1,2,3], [4,5,6],]

const arr3 : string[] = ["a", "b", "c", "d"] 

//Tuples 
const tuple : [string,string,number] = ["QuangHX","Ha Nam",20]
tuple.push("1213")
console.log(tuple);



//Enum
enum STATUS {PENDING, REJECTED, FULFILED}
const trangthai1 : STATUS = STATUS.PENDING
console.log(trangthai1);

enum CODE {SUCCESS=200, CILENT_ERROR=400, SERVER_ERROR=500}
const error :CODE = CODE.CILENT_ERROR
console.log(error);


//FunCTIONS
const upperCase = (a:string | number) =>{
    if(typeof a =="string"){
        console.log(a.toUpperCase);
        
    }
}


////////////////////
let hobbies = ['spring','java'];
console.log(...hobbies);


