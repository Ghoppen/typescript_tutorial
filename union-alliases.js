function combine(input1, input2) {
    var result;
    if (typeof input1 === "number" && typeof input2 === "number") {
        result = input1 + input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    return result;
}
var combinedAges = combine(20, 30);
console.log(combinedAges);
var combinedNames = combine("sara ", "tomas");
console.log(combinedNames);
