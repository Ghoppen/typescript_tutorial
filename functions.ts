function add(n1: number, n2: number):number {
    return n1 +n2
}

function printResult(num:number):void|undefined{
    console.log("Result " + num)
    return
}

function addAndHandle(n1:number,n2:number, callback:(num:number)=>void) {
    const result = n2 + n1
    callback(result)

}

printResult(add(5,12))
//function typing
let combineValues: (n1:number,n2:number) =>number
combineValues = add;
//combineValues = printResult;

console.log(combineValues(8,8))

addAndHandle(10,20,(result)=>{
    console.log(result)
})