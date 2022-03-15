console.log("Exercise 17 ---");

function checkPrime(m,n) {
    if(m > 0 && n > 0)
    {
        while(m != n) {
            if(m > n) {
                m = m - n; 
            } else {
                n = n - m;
            }
        }
        if(m == 1) {
            console.log("Hai so nguyen to cung nhau");
        } else {
            console.log("Hai so KHONG nguyen to cung nhau");
        }
    } else {
        console.log("Re-enter m, n > 0");
    }
}
checkPrime(1,2);
checkPrime(2,8);