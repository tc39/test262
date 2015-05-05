// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: >
    [[String.Raw]] Passing a non-matching length of substitutions
    array String.raw
---*/

var callSite = ['a', 'c', 'e'];
callSite.raw = ['a', 'c', 'e'];
var substitutions = ['b', 'd', 'f'];
var str = "";

var output = String.raw(callSite, substitutions[0], substitutions[1], substitutions[2]);
if (output !== "abcde") {
    $ERROR('[String.Raw] Invoking String.raw with a non-matching length of substitution array failed. Expected : abcde || Actual : ' + output);
}
