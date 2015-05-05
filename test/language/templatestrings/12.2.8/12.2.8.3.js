// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: >
    [[Substitutions]] Tests whether the toString() method is invoked
    properly
---*/

function customObj() {
    this.value = "Hi";
}
var count = 1;
var obj = new customObj();
var output;

output = `Object: ${obj}`;
if (output !== 'Object: [object Object]') {
    $ERROR('[Substitutions] toString call on object failed. Expected : Object: [object Object] || Actual : ' + output);
}

customObj.prototype.toString = function() {
    return `${this.value} (InvocationCount - ${count++})`;
};
output = `Object: ${obj}`;
if (output !== 'Object: Hi (InvocationCount - 1)') {
    $ERROR('[Substitutions] First invocation wtih new toString definition failed. Expected : Object: Hi (InvocationCount – 1) || Actual : ' + output);
}

output = `Object: ${obj}`;
if (output !== 'Object: Hi (InvocationCount - 2)') {
    $ERROR('[Substitutions] Second invocation wtih new toString definition failed. Expected : Object: Hi (InvocationCount - 2) || Actual : ' + output);
}

output = `Object: ${obj}`;
if (output !== 'Object: Hi (InvocationCount - 3)') {
    $ERROR('[Substitutions] Third invocation wtih new toString definition failed. Expected : Object: Hi (InvocationCount - 2) || Actual : ' + output);
}
