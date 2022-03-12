console.log("Exercise 10 ---");

function sideOfTriangle (a, b, c) {
    if(Math.abs(a - c) < b && b < (a + c)) {
    console.log(a,b,c,"a, b, c are the three sides of the triangle!");
    }
    else
    {
       console.log(a,b,c,"a, b, c are not the three sides of the triangle!");
    }
}


sideOfTriangle(3,4,5);
sideOfTriangle(3,100,4);