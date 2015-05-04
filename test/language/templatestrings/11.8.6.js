// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: >
    [[No-sbustitution]] These tests check the accuracy of template
    literal evaluation without any substituions
---*/

var output = ``;
if (output !== '') {
    $ERROR('[No-Substitution] Empty string input failed. Expected :  Actual : ' + output);
}

output = `Hello World`;
if (output !== 'Hello World') {
    $ERROR('[No-Substitution] Literal string input failed. Expected : Hello World Actual : ' + output);
}

output = `a`;
if (output !== 'a') {
    $ERROR('[No-Substitution] Source character input failed. Expected : a Actual : ' + output);
}

output = `$`
if (output !== '$') {
    $ERROR('[No-Substitution] $character input failed. Expected : $ Actual : ' + output);
}

output = `\u0023`;
if (output !== '#') {
    $ERROR('[No-Substitution] Unicode input for # failed. Expected : # Actual : ' + output);
}

output = `\n`;
if (output !== "\n") {
    $ERROR('[No-Substitution] LineContinuation input failed. Expected :  Actual : ' + output);
}

output = `\"`;
if (output !== '"') {
    $ERROR('[No-Substitution] Double quotes input failed. Expected : " Actual : ' + output);
}

output = `\h`;
if (output !== 'h') {
    $ERROR('[No-Substitution] Escape sequence with source character input failed. Expected : h Actual : ' + output);
}

output = `\0`;
if (output !== '\0') {
    $ERROR('[No-Substitution] NULL input failed. Expected :  Actual : ' + output);
}

output = `\xF8`;
if (output !== "ø") {
    $ERROR('[No-Substitution] Hex digits input failed. Expected : ø Actual : ' + output);
}

output = `\ua48c`;
if (output != "ꒌ") {
    $ERROR('[No-Substitution] Unicode string input failed. Expected : ꒌ Actual : ' + output);
}

output = `This
is
a
literal\r\n`;
if (output !== "This\nis\na\nliteral\r\n") {
    $ERROR('[No-Substitution] Multi-line string input failed. Expected : This\\nis\\na\\nliteral\r\n Actual : ' + output);
}
