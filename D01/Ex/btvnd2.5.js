console.log("Exercise 5 ---");

function calTotal(n) {
    var sum = 0, gt = 1, i;
    for(i = 1; i <=n; i++) {
        gt *= i;
        sum += gt;
    }
    console.log("SUM = " +sum);
}

calTotal(5);