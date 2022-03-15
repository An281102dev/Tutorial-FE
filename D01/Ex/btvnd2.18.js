console.log("Exercise 18 ---");

function calculatePI(c) {
    var k = 0, res = 0, signal = -1, tg = 1.0 / (2 * k + 1);
    while(tg >= c) {
        tg = 1.0 / (2 * k  + 1);
        res += -1 * signal * tg;
        signal *= -1;
        k++;
    } 
    var PI = 4 * res;
    console.log("PI = ", + PI);
}
calculatePI(0.0001);