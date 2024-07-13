const result = document.getElementById("result")

function clearDisplay(input){
 result.value = ""
}

function appendToDisplay(input){
    result.value += input
}

function calculate(input){
try {
    result.value = eval(result.value)
} catch (error) {
    result.value ="Error"
}
    
}