let test = {};

test.name = test.name ?? "Chlp";                //nullish operator
if(!test.val) test.val = 23;                    // if statement
test.cond = (test.cond || 0 || "dj");           // OR operator
test.bool = test.val < 20 ? true : false;       //ternary operator

console.log(test);