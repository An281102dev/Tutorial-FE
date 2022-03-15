console.log("Exercise 3 ---");

function calTotal(n) {
    var i, sum = 0;
    for(i = 1; i <= n; i++) {
        sum += 1 / i
    }
    console.log("SUM = " + sum);
}

calTotal(3);