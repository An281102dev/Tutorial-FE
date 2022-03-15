console.log("Exercise 10 ---");

function dissectANumber(n) {
    var i = 2;
    console.log(n + " = ");
    while(n > 1) {
        if(n % i == 0) {
            console.log(i);
        if(n != i) {
            console.log("x");
        }
        n /= i;
        } else {
            i++;
        }
    }
} 
dissectANumber(56);