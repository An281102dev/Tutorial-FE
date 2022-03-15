console.log("Exercise 9 ---");

function checkNumber(n) {
    var i, mark = 1;
    for(i = 2; i <= Math.sqrt(n); i++) {
        if(n % i == 0) {
            mark = 0;
            break;
        }
    }
    if(mark == 1) {
        console.log(n + " is a integer");
    } else {
        console.log(n + " is not a integer");
    }
}
checkNumber(3);
checkNumber(4);