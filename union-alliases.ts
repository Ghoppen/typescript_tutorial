type Combinable = number|string
type ConversionDescriptor="as-number"|"as-text"

function combine(
    input1:Combinable,
    input2:Combinable,
    conversion: ConversionDescriptor)
{
    let result;
    if (typeof input1 === "number" && typeof  input2==="number"){
        result = input1 + input2
    }else {
        result = input1.toString() + input2.toString()
    }
    if(conversion==="as-number"){
        return +result
    }else{
        return result.toString()
    }

}

const combinedAges = combine(20,30, "as-number")
console.log(combinedAges)

const combinedNames = combine("sara ","tomas", "as-text")
console.log(combinedNames)