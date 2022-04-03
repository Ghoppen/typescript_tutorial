function add(n1 :number,n2:number, showResult:boolean, phrase:string){
    const sum =n1+n2
    if (showResult){
        console.log(phrase+sum)
    }
    return sum
}

const number1 = 5
const number2 = 2.8
const printResult = true
const phrase = "Result is  "

const result = add(number1,number2, printResult, phrase)
console.log(result)