// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: "[[Substitutions]] Regular expression inside a string template"
---*/

var re;
`${re = new RegExp('[0-9]+')}`;

var str = 'The 3435354343 is an odd number';
var output = `Does the string has a number in it? ${re.exec(str) ? 'yes' : 'no'}`;
if (output !== "Does the string has a number in it? yes") {
    $ERROR('[Substitutions] Regex evaluation returned wrong value Expected : Does the string has a number in it? no || Actual : ' + output);
}
