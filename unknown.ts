let userInput : unknown;
let userName:string;

userInput = 5;
userInput = "string";
if (typeof userInput === "string"){
    userName = userInput
}

function generateError(message:string,errorCode:number):never {
    throw {message:message, errorCode:errorCode}
}


const result = generateError("error",500)
console.log(result)