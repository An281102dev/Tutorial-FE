console.log("Exercise 8 ---");

function solveMath(a,b) {
    var x;
    if(a == 0 && b != 0) {
        console.log("Not found!");
    }
    else if(a == 0 && b == 0) {
        console.log("The equation has infinitely many solutions");
    }
    else {
        x = - b / a;
        console.log("equation = " + x);
    }
}

solveMath(0,3);
solveMath(0,0);
solveMath(4,2);

