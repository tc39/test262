// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: >
    [[Tagged-No-Substitutions]] Verify that raw string calculation of
    tagged templates work with escape sequences
includes: [templateTestHandler.js]
---*/

var cookedStrings = ["a", "$", "\n", "\"", "h", "\xF8", "\u0023", "\ua4cb"]
var rawStrings = ["a", "$", "\\n", "\\\"", "\\h", "\\xF8", "\\u0023", "\\ua4cb"]
var substitutions = [ x, x, x, x, x, x, x ]
var x = 10;
var output = testHandler`a${x}$${x}\n${x}\"${x}\h${x}\xF8${x}\u0023${x}\ua4cb`;
if (output !== 'Success') {
    $ERROR('[Tagged-No-Substitutions] Raw value calculation of tagged template with escape sequences failed. Expected : Success || Actual : ' + output);
}
