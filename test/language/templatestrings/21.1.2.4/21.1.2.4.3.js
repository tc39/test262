// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: "[[String.Raw]] Passing different object types to String.raw"
---*/

var str = 'Hello';
var output = String.raw`${str} World`;
if (output !== "Hello World") {
    $ERROR('[String.Raw] Invoking String.raw as template literal failed. Expected : Hello World || Actual : ' + output);
}

var callSite = ["This is ", ""];
callSite.raw = ["This is ", ""];
var substitutions = [ "template string" ];
output = String.raw(callSite, substitutions);
if (output !== 'This is template string') {
    $ERROR('[String.Raw] Invoking String.raw with raw strings and string substitutions failed. Expected : This is template string || Actual : ' + output);
}

var obj = {
    0 : "Hi",
    raw : {
        length: 1,
        0: "Hi"
    }
};
output = String.raw(obj);
if (output !== 'Hi') {
    $ERROR('[String.Raw] Invoking String.raw passing an object with a 0 property failed. Expected : Hi || Actual : ' + output);
}

callSite = [ [ new Number(1), new Number(2), new Number(3) ], new Number(4) ];
callSite.raw = [ [ new Number(1), new Number(2), new Number(3) ], new Number(4) ];
substitutions = [ "," ];
output = String.raw(callSite, substitutions);
if (output !== '1,2,3,4') {
    $ERROR('[String.Raw] Invoking String.raw with raw strings and string substitutions failed. Expected : 1,2,3,4 || Actual : ' + output);
}
