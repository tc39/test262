// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: >
    [[Substitutions]] If toString() is not defined then valueOf()
    should be invoked
---*/

function customObj() {
    value: "Hi"
}
var obj = new customObj();
var output;

customObj.prototype.toString = null;
customObj.prototype.valueOf = function() {
       return `Invoked valueOf`;
};
output = `Object: ${obj}`;
if (output !== 'Object: Invoked valueOf') {
    $ERROR('[Substitutions] Substitution after toString assigned null failed. Expected : Object: Invoked valueOf || Actual : ' + output);
}

customObj.prototype.toString = undefined;
output = `Object: ${obj}`;
if (output !== 'Object: Invoked valueOf') {
    $ERROR('[Substitutions] Substitution after toString assigned undefined failed. Expected : Object: Invoked valueOf || Actual : ' + output);
}
