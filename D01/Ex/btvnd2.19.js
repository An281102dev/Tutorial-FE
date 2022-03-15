console.log("Exercise 19");

function calE(x,a) {
    var kGiaiThua = 1, k = 0, xMuK = 1, kq = 0, tam = xMuK / kGiaiThua;
    while(tam >= a) {
        kq += tam;
        k++;
        xMuK *= x;
        kGiaiThua *= k;
        tam = xMuK / kGiaiThua;
    }
    console.log("e^" + x + " = " + kq);
}
calE(0,0.0001);