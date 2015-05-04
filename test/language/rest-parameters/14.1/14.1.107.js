// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: Try to pass a generator method for rest arg
---*/

function foo(a, ...funcs) {
    if (funcs.length !== 1) {
        $ERROR("The length of rest argument is expected to be 1");
    }
    if (funcs[0].next().value !== 1) {
        $ERROR("Generator method is expected to return 1 on first invocation");
    }
    if (funcs[0].next().value !== 2) {
        $ERROR("Generator method is expected to return 2 on second invocation");
    }

    return funcs[0].next();
}

var i = 0;
function *genFunc() {
    while (true) {
        yield ++i;
    }
};
var result = foo(10, genFunc());
if (result.value !== 3) {
    $ERROR("Generator method is expected to return 3 on third invocation");
}
