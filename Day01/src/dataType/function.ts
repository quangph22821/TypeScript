//1 Function declaration
function func1 (){
    console.log("Func1");
    
}

const func2 = function(){
    console.log("func2");
    
}

const func3 =()=>{
    console.log("Func3");
    
}

// Function return
function func4():string{
    return
}

function sum(a:number):number {
    return a
}

//void là hàm k trả về gì hết
function func5 () : void{
    console.log("Hoàng Xuân Quang");
    
}

function func6 () :never{
    while(true){

    }
}

function func7 () :never{
    const error = new Error("Có lỗi")
    throw error;
}

// 3. Function parameter

function divide(a:number, b?:number) : number{
    if(b){
        return a-b
    }else{
        return a
    }
}

function divide2(a:number, b:number=0): number{
    return a-b
}

divide(10)

// 4. Rest parameter
const showClass = (name:string, ...classes:string[]) : string =>{
    return `Sinh viên ${name} học lớp ${classes.join(", ")}`
}
console.log(showClass("Quang","Typescript","Nodejs"));


// Callback

const num_arr= [5,6,7]
const temp = num_arr.map((item)=>{
    return item*2
})


const class_map = function(arr:number[], callback ?:(item:number)=>number){
    const temp =[]
    for(let i = 0; i<arr.length; i++){
        const newItem = callback(arr[i])
        temp.push(newItem)
    }
    return temp
}

const result = class_map(num_arr,(item)=>{
    return item*item
})

console.log(result);

//hien thi index
// const kq = class_map(array,(array,index)=>{

// })


