// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: Rest params interaction with Function.prototype.apply()
---*/

function foo(a, b = 10, ...c) {
    return `${a},${b},${c}`;
}

var result = foo.apply();
if (result !== "undefined,10,") {
    $ERROR("Function was expected to return undefined,10, but got " + result);
}

result = foo.apply(null, [5]);
if (result !== "5,10,") {
    $ERROR("Function was expected to return 5,10, but got " + result);
}

result = foo.apply(null, [5, 20]);
if (result !== "5,20,") {
    $ERROR("Function was expected to return 5,20, but got " + result);
}

result = foo.apply(null, [5, 20, 15]);
if (result !== "5,20,15") {
    $ERROR("Function was expected to return 5,20,15 but got " + result);
}

result = foo.apply(null, [5, 20, 15, 50]);
if (result !== "5,20,15,50") {
    $ERROR("Function was expected to return 5,20,15,50 but got " + result);
}
