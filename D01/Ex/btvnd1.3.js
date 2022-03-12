console.log("Exercise 3 ---");

function calculate(a,b){
    var sum = a + b; 
    console.log("sum " + a  + "+" + b + "=" + sum);
}

calculate(3,4);

console.log("RUN --");

function getMaxMinNumber(a,b,c,d){
    var max = a; // 1

    if(b > max) {
        max = b; // 2
    }

    if(c > max){
        max = c; // 3
    }

    if(d > max){
        max = d; // 4
    }

    console.log("max = " + max);

}

getMaxMinNumber(5,2,3,4);