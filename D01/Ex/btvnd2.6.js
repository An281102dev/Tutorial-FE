console.log("Exercise 6 ---");

function findN(n) {
    var sum = 0, i;
    for(i = 7; i <= n; i += 7) {
        sum += i;
    }
    console.log("SUM = " + sum);
}

findN(1000000);