// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: >
    [[Substitutions]] These tests check the accuracy of operators
    evaluations inside substitutions
---*/

var x, y, $;
var text1, text2, output;

text1 = 'Hello';
text2 = ' World';
output = `${text1}${text2}`;
if (output !== 'Hello World') {
    $ERROR('[Substitutions] Empty literals and string substitutions failed. Expected : Hello World || Actual : ' + output);
}

$ = 2;
output = `${++$}$`;
if (output !== '3$') {
    $ERROR('[Substitutions] $ variable in substitution failed. Expected : Hello World || Actual : ' + output);
}

x = 21;
output = `${12.4e3 + x}`;
if (output !== '12421') {
    $ERROR('[Substitutions] Substitution with float input failed. Expected : 12421 || Actual : ' + output);
}

x = 2;
y = 11;
output = `Modulus of ${y} and ${x} is ${y % x}`;
if (output !== 'Modulus of 11 and 2 is 1') {
    $ERROR('[Substitutions] Substitution with modulus operator failed. Expected : Modulus of 11 and 2 is 1 || Actual : ' + output);
}

x = 6;
y = 10;
output = `${y} is now ${y *= x -= (2 * 2)}`;
if (output !== '10 is now 20') {
    $ERROR('[Substitutions] Substitution with assignment operator precedence test failed. Expected : 10 is now 20 || Actual : ' + output);
}

output = `Both ${obj1} and ${obj2} are ${obj1 == obj2 ? "equal" : "not equal"}`;
if (output !== 'Both undefined and undefined are equal') {
    $ERROR('[Substitutions] Substitution with undefined values failed. Expected : Both undefined and undefined are equal || Actual : ' + output);
}
var obj1 = 5
var obj2 = 5

x = true;
output = `Is ${x} false? ${!x}`;
if (output !== 'Is true false? false') {
    $ERROR('[Substitutions] Substitution with negation of boolean failed. Expected : Is true false? False || Actual : ' + output);
}

x = false;
y = true;
output = `Is ${x} or ${y} a true? ${x || y ? 'yes' : 'no'}`;
if (output !== 'Is false or true a true? yes') {
    $ERROR('[Substitutions] Substitution string with logical operators input failed. Expected : Is false or true a true? yes || Actual : ' + output);
}

text1 = 'Hello world';
output = `\u2028${text1} \u2029`;
var oct1 = "\u2028";
var oct2 = "\u2029";
if (output !== oct1 + 'Hello world ' + oct2) {
    $ERROR('[Substitutions] Substitution with unicode escape sequence failed. Expected : Hello world || Actual : ' + output);
}

text1 = 'Hello\n';
text2 = 'World';
output = `\n${text1}` + '\u000B' + `${text2}`;
if (output !== "\nHello\n\vWorld") {
    $ERROR('[Substitutions] Concatenation with unicode escape sequence failed. Expected : \nHello\r\n\vWorld || Actual : ' + output);
}

text1 = 'Hello\r';
text2 = 'World';
output = `\u000D${text1 + '\r' + text2}`;
if (output !== '\rHello\r\rWorld') {
    $ERROR('[Substitutions] Concatenation of strings with line continuation symbols failed. Expected : Hello\r\rWorld || Actual : ' + output);
}
