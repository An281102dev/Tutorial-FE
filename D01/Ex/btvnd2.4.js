console.log("Exercise 4 ---");

function calTotal(n) {
    var s = 0, s1 = 0, s2 = 0;
    var i;

    for(i = 1; i <= n; i++) {
        s += i;
        if(i % 2 == 0) {
            s1 += i;
        } else {
            s2 += i;
        }
    }
        console.log("Tong = " + s);
        console.log("Tong chan = " + s1);
        console.log("Tong le = " + s2);
}

calTotal(100);