// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: "[[Tagged-Substitutions]] Function constructor"
---*/

var wish = "Hello";
var time = "day";
var output = (new Function("literals", "substitutions0", "substitutions1", `
    var str = '';

    for (var i = 0; i < literals.length - 1; i++) {
        str += literals[i];

        if (i == 0) {
            str += substitutions0;
        }
        else if (i == 1) {
            str += substitutions1;
        }
    }
    str += literals[literals.length - 1];

    return str;
`))`${wish} World. This is a nice ${time}`;

if (output != 'Hello World. This is a nice day') {
    $ERROR('[Tagged-Substitutions] Function constructor tag failed. Expected : Hello World. This is a nice day. || Actual : ' + output);
}
