console.log("Exercise 13 ---");

function checkNumber(n) {
    var reverse = 0, m = n;
    while(m > 0) {
        reverse = reverse * 10 + m % 10;
        m /= 10;
    }
    if(reverse == n)
    {
        console.log(n + " is the inverse number");
    }
    else 
    {
        console.log(n + " is not the inverse number");
    }
}
checkNumber(3223);
checkNumber(1212);