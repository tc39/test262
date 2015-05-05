// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: >
    [[Tagged-Substitutions]] Verify that raw string calculation of
    tagged templates work with escape sequences
includes: [templateTestHandler.js]
---*/

var cookedStrings = ["", ""];
var rawStrings = ["", ""];
var substitutions = [ null ];
var output = testHandler`${null}`;
if (output != 'Success') {
    $ERROR('[Tagged-Substitutions] Raw Passing null to the tagged handler failed. Expected : Success || Actual : ' + output);
}

cookedStrings = ["", " today"];
rawStrings = ["", " today"];
substitutions = [ "Please visit Chakra" ];
str="Please visit Microsoft!"
var output = testHandler`${str.replace("Microsoft","Chakra")} today`;
if (output != 'Success') {
    $ERROR('[Tagged-Substitutions] String replace inside testHandler failed. Expected : Success || Actual : ' + output);
}

cookedStrings = ["", " ", " ", " ", ""];
rawStrings = ["", " ", " ", " ", ""];
substitutions = [ NaN, -Infinity, 23, 0.00123 ];
output = testHandler`${NaN} ${-Infinity} ${new Number(23)} ${new Number(123e-5)}`;
if (output != 'Success') {
    $ERROR('[Tagged-Substitutions] Number values inside testHandler failed. Expected : Success || Actual : ' + output);
}

cookedStrings = ["", ""];
rawStrings = ["", ""];
substitutions = [ new Date('August 18, 2013') ];
output = testHandler`${new Date(2013, 8, 18)}`;
if (output != 'Success') {
    $ERROR('[Tagged-Substitutions] Number values inside testHandler failed. Expected : Success || Actual : ' + output);
}

cookedStrings = ["", ""];
rawStrings = ["", ""];
substitutions = [ [ Math.PI, 4 ] ];
output = testHandler`${[ Math.PI, Math.sqrt(16) ]}`;
if (output != 'Success') {
    $ERROR('[Tagged-Substitutions] Number values inside testHandler failed. Expected : Success || Actual : ' + output);
}

cookedStrings = ["", "", ""];
rawStrings = ["", "", ""];
substitutions = [ undefined, null ];
output = testHandler`${undefined}${null}`;
if (output != 'Success') {
    $ERROR('[Tagged-Substitutions] Number values inside testHandler failed. Expected : Success || Actual : ' + output);
}
