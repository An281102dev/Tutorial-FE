
function getNumbersEven(number){

    var result = "";
    while(number > 0){
        if(number % 2 == 0){
            result += number + ", "
        }
        number --;
    }
    return result;
}

var numbers = getNumbersEven(10);
console.log(numbers)


function getNumbersEvenHTML(){
    var resultEle = document.querySelector('#result');
    var inputEle = document.querySelector('#input-ex1');
    var number = inputEle.value;
    var listEven = getNumbersEven(number);
    resultEle.innerHTML = listEven;
}



