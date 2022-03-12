
console.log("Exercise 5 ---");

function checkMax(a,b,c,d) {
    var max = (a > b) ? a : b;
    max = (max > c) ? max : c;
    max = (max > d) ? max : d;

    if(a == b && b == c && c == d) {
        console.log(a,b,c,d,"No maximum value!");
    }
    else {
        console.log(a,b,c,d,"The maximum value is: " + max);
    }
}
checkMax(2,4,3,5);
checkMax(2,2,2,2);