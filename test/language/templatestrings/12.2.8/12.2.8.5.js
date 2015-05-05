// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: >
    [[Substitutions]] These tests verify that the eval works fine with
    templates
---*/

var x;
var str, alteredString, output;
var indirectEval;

function change10(a) {
    x = 20;
}
x = 10;
eval("change" + `${x++}` + "(x);");
if (x !== 20) {
    $ERROR('[Substitutions] Passing template as an argument to eval failed. Expected : 20 || Actual : ' + x);
}

str = "Hello";
alteredString = `${eval(new String(str + " World"))}`;
if (alteredString !== 'Hello World') {
    $ERROR('[Substitutions] Executing eval inside a template failed. Expected : Hello World || Actual : ' + alteredString);
}

alteredString = `${str} ${eval(new String("World"))}`;
if (alteredString !== 'Hello World') {
    $ERROR('[Substitutions] Contacatenation of a string with an eval inside a template failed. Expected : Hello World || Actual : ' + alteredString);
}

str = "Hello";
indirectEval = eval;
alteredString = `${str} ${indirectEval(new String("World"))}`
if (alteredString !== 'Hello World') {
    $ERROR('[Substitutions] Contacatenation of a string with an indirect eval inside a template failed. Expected : Hello World || Actual : ' + alteredString);
}
