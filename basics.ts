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

//const person: {
//  name: string;
//  age: number;
//}

enum Role {
    ADMIN,Read_Only,user
}

const person= {
    name: "Max",
    age: 30,
    hobbies: ["sports","cooking"],
    role : Role.ADMIN
}


let favoriteActivities:string[]
favoriteActivities = ["jump"]



console.log(person)