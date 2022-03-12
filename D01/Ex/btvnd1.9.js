console.log("Exercise 9 ---");

function solveMath(a, b, c) {
  if (a == 0) {
    if (a == 0 && b != 0) {
      console.log("Not found!");
    } else if (a == 0 && b == 0) {
      console.log("The equation has infinitely many solutions");
    } else {
      x = -c / b;
      console.log("equation = " + x);
    }
  } else {
    var delta = b * b - a * c * 4,
      x1,
      x2;
    if (delta < 0) {
      console.log("Not found!");
    } else if (delta == 0) {
      x1 = -b / (2 * a);
      console.log("equation with double solution x = " + x1);
    } else {
      x1 = (-b + Math.sqrt(delta)) / (2 * a);
      x2 = (-b - Math.sqrt(delta)) / (2 * a);
      console.log("x1 = " + x1);
      console.log("x2 = " + x2);
    }
  }


  
}

solveMath(2, 4, 6);
solveMath(1, -3, 2);
