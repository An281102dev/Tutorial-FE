console.log("Exercise 8 ---");

function multiplesNDivisors(a,b) {
    if(a >= 0 && b >= 0) {
        if(a == 0 && b == 0) {
            console.log("Not found!");
        } else if(a == 0 || b == 0) {
            console.log("Biggest divisors: " + (a == 0) ? b : a);
        } else {
            var bc = a * b;
            while(a != b) {
                if(a > b) {
                    a = a - b;
                } else {
                    b = b - a;
                }
            }
            console.log("Biggest divisors: " + a);
            console.log("Smallest multiples: " + bc / a);
        }
    }      
    }
    multiplesNDivisors(12,32);
