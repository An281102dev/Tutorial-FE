
console.log("Exercise 5 ---");

function checkMax(a,b,c,d) {

    var max = (a > b) ? a : b;

    // if(a > b){
    //     max = a;
    // }
    // else {
    //     max = b;
    // }

    max = (max > c) ? max : c;
    max = (max > d) ? max : d;

    if(a == b && b == c && c == d) {
        console.log(a,b,c,d,"No maximum value!");
    }
    else {
        console.log(a,b,c,d,"The maximum value is: " + max);
    }

     // var max = a;

    // if(max < b) {
    //     max = b;
    // }

    // if(max < c){
    //     max = c;
    // }

    // if(max < d){
    //     max = d;
    // }
}
checkMax(2,4,3,5);
checkMax(2,2,2,2);