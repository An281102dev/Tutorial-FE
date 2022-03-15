console.log("Exercise 7 ---");

function listDivisors(n) {
    var i, counter = 0;
    for(i = 1; i <= n; i++) {
        if(n % i == 0) {
            console.log(":" +i);
            counter++;
        }
    }
    console.log(n + " has a sum of divisors = " + counter);
}

listDivisors(200000);