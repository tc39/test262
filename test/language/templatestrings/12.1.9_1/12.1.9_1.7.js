// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: "[[Substitutions]] Object literal test"
---*/

var bool = true;
var obj = {
    value : 5,
    toString : function() { return `Value is ${this.value}`; }
};

var output = `${obj} : ${bool}`;
if (output !== "Value is 5 : true") {
    $ERROR('[Substitutions] Object literal evaluation failed Expected : Value is 5 : true || Actual : ' + output);
}
