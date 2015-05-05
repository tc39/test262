// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: "[[Tagged-Substitutions]] Tag method is invoked as an array member"
includes: [templateTestHandler.js]
---*/

var print = new Function("literals", "substitutions0", `
    var str = '';

    for (var i = 0; i < literals.length - 1; i++) {
        str += literals[i];
        str += substitutions0;
    }
    str += literals[literals.length - 1];

    return str;
`);

var nameObj = {
    firstName : "JavaScript",
    lastName : "Chakra",
    toString : function() { return `${firstName} - ${secondName}`; }
};

var printLiteral = function() {
};

var cookedStrings = ["This is ", ""];
var rawStrings = ["This is ", ""];
var substitutions = [ "JavaScript - Chakra" ];
var handlers = [ print, printLiteral, testHandler];

var output = handlers[handlers.length - 1]`This is ${nameObj}`;
if (output != 'Success') {
    $ERROR('[Tagged-Substitutions] Tag method invoked as an array member failed. Expected : Success || Actual : ' + output);
}
