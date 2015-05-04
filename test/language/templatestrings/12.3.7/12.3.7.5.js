// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: "[[Tagged-Substitutions]] Self-executing method as the tag"
---*/

var str = "World";
var status = "nice";

// Temporary fix for rest
var output = (function(literals, substitutions0, substitutions1) {
    var resultString = '';
    for (var i = 0; i < literals.length - 1; i++) {
        resultString += literals[i];
        if (i == 0) {
            resultString += substitutions0;
        }
        else if (i == 1) {
            resultString += substitutions1;
        }
    }
    resultString += literals[literals.length - 1];
    return resultString;
})`Hello ${str}. This is a ${status} day.`;

if (output != 'Hello World. This is a nice day.') {
     $ERROR('[Tagged-Substitutions] Self-executing method as tag failed. Expected : Hello World. This is a nice day. || Actual : ' + output);
}
