console.log("Exercise 15 ---");

function calTotal(n) {
    if(n < 0) {
        n *= -1;
    }
    var sum = 0;
    while(n > 0) {
        sum += n % 10;
        n /= 10;
    }
    console.log("Total = " + sum);
}
calTotal(1234);