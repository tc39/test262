// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: "[[String.Raw]] Basic test cases for String.raw"
---*/

var callSite = [];
var substitutions = [];
var str;

callSite = [];
callSite.raw = [];
substitutions = [];
output = String.raw(callSite, substitutions);
if (output !== '') {
    $ERROR('[String.Raw] Passing empty arguments to String.raw failed. Expected :  || Actual : ' + output);
}

callSite = ['a', '$', '\n', '', '"', 'h', '248', '35'];
callSite.raw = ['a', '$', '\n', '\"', '\h', '\xF8', '\u0023'];
substitutions = ['', '', '', '', '', '', ''];
str = "";
output = String.raw(callSite, ...substitutions);
if (output !== 'a$\n"hø#') {
    $ERROR('[String.Raw] Invoking String.raw with escape sequences failed. Expected : a$\n"hø# || Actual : ' + output);
}
