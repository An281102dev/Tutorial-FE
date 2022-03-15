console.log("Exercise 14 ---");

function calculateN(n) {
    var gt = 1, i;
    for(i = n; i >= 1; i--) {
        gt *= i;
    }
    console.log(n + "! = " + gt);
}
calculateN(5);