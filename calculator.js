let x = 4
let y = 0


class Calculator {
    sum(x , y){
        return x + y
    } 
    divide(x ,y){
        return x / y
    }

    multiply(x ,y){
        return x * y
    }
    odcitani(x ,y){
        return x - y
    }
}
let calculator = new Calculator

console.log(calculator.sum(x ,y))
console.log(calculator.divide(x ,y))
console.log(calculator.multiply(x ,y))
console.log(calculator.odcitani(x ,y))





