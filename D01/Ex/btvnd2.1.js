console.log("Exercise 1 ---");

function numberEvenOdd(n) {
    var i;
    console.log("Even numbers: ");
    for(i = 0; i < n; i += 2) {
        console.log(i + ", ");
    }
    console.log("Odd numbers: ");
    for(i = 1; i < n; i += 2) {
        console.log(i + ", ");
    }
}

numberEvenOdd (10);