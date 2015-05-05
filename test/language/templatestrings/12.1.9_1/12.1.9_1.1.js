// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: "[[Substitutions]] Error is thrown from the toString() method"
---*/

function customObj() {
    value: "Hi"
}
var count = 1;
var obj = new customObj();
customObj.prototype.toString = function() {
    throw `Error at invocation ${count++}`;
};

try {
    var str = `Object: ${obj}`;
    $ERROR('[Substitutions] Exception originated from toString() was not thrown');
} catch (exception) {
    if (exception !== 'Error at invocation 1') {
        $ERROR('[Substitutions] Exception originated from toString() was not propogated properly');
    }
}
