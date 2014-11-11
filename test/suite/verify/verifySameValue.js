// Copyright
//

/*---
includes: [propertyHelper.js]
---*/

var values = [0, -0, Infinity, -Infinity, NaN,
              1, -1, "", "a", [], {}, undefined, 
              true, false, null];

values.forEach(function (x, i) {
    values.forEach(function(y, j) {
        if (sameValue(x, y) !== (i === j)) {
            $ERROR("Expected sameValue(" + x + ", " + y + ") to be " + (i === j) + ".");
        }
    });
});


