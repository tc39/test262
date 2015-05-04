// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: Rest params interaction with Function.prototype.call()
---*/

function foo(a, b = 10, ...c) {
    return `${a},${b},${c}`;
}

if (foo.call() !== "undefined,10,") {
    $ERROR("Function was expected to return undefined,10,");
}
if (foo.call(null, 5) !== "5,10,") {
    $ERROR("Function was expected to return 5,10,");
}
if (foo.call(null, 5, 20) !== "5,20,") {
    $ERROR("Function was expected to return 5,20,");
}
if (foo.call(null, 5, 20, 15) !== "5,20,15") {
    $ERROR("Function was expected to return 5,20,15");
}
if (foo.call(null, 5, 20, 15, 50) !== "5,20,15,50") {
    $ERROR("Function was expected to return 5,20,15,50");
}
