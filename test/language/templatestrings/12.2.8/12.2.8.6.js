// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: >
    [[Substitutions]] Verify that different types of function
    definitions and invocation works fine within the templates
---*/

var number;
var str, output;

function increment(n) {
    return n++;
}
number = 10;
output = parseInt(`${increment(number)}`);
if (output !== 10) {
    $ERROR('[Substitutions] Method invocation from templates failed. Expected : 10 || Actual : ' + output);
}

str = 'This is a';
var incMethod;
output = `${incMethod = function() {return `${str}` + ' string'}, incMethod()}`;
if (output != 'This is a string') {
    $ERROR('[Substitutions] Function definition and invocation from templates failed. Expected : This is a string || Actual : ' + output);
}

str = 'This is a';
str = `${(function() { return str + ' string'})()}`;
if (str !== 'This is a string') {
    $ERROR('[Substitutions] Self-execution of a function from templates failed. Expected : This is a string || Actual : ' + output);
}
