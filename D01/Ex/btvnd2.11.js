console.log("Exercise 11 ---");

function listNumber(n) {
    if(n <= 0) {
        console.log("Enter positive numbers, please!");
    } else {
        var count = 0, m = 2;
        while(1) {
            var mark = 1, i;
            for(i = 2; i <= Math.sqrt(m); i++) {
                if(m % i == 0) {
                    mark = 0;
                    break;
                }
            }
            if(mark == 1) {
                count++;
                console.log(m + ", ");
            }
            if(count >= n) {
                break;
            }
        }
    }
}

listNumber(600);