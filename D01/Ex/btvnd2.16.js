console.log("Exercise 16 ---");

function findNum(m,n) {
    if(m >= 0 && m < n) {
        var start = Math.sqrt(m);
        var end = Math.sqrt(n); 
        var i;
        for(i = start; i <= end; i++) {
            console.log(i * i + ", ");
        }
    } else {
        console.log("Enter m < n");
    }
}
findNum(0,10);