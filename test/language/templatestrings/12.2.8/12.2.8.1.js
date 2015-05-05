// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: >
    [[Substitutions]] These tests check the basic substitution
    evaluation scenarios inside substitutions
---*/

var x, y, $;
var str1, str2, output;
 
if (`${''}` !== '') {
	$ERROR('[Substitutions] Empty substitution input failed');
}

output = `${undefined}`;
if (output !== 'undefined') {
	$ERROR('[Substitutions] Undefined input failed. Expected : undefined || Actual : ' + output);
}

x = NaN;
ouput = `Value of x is ${x}`;
if (ouput !== 'Value of x is NaN') {
	$ERROR('[Substitutions] Substitution of NaN failed. Expected : Value of x is NaN || Actual : ' + output);
}

x = 5;
output = `${x} is the value of x`;
if (output !== '5 is the value of x') {
	$ERROR('[Substitutions] Substitution at the beginning of template failed. Expected : 5 is the value of x || Actual : ' + output);
}

x = 10;
output = `${null} ${x} ${null}`;
if (output !== 'null 10 null') {
	$ERROR('[Substitutions] String and integer combination input failed. Expected : null 10 null || Actual : ' + output);
}

str1 = "This";
str2 = "a";
output = `${str1} is ${str2} string template`;
if (output !== 'This is a string template') {
	$ERROR('[Substitutions] Input with combination of literal and substitution failed. Expected : This is a string template || Actual : ' + output);
}

x = 10;
output = `Value of x is: 
		${x} 
		and adding one to it gives ${x + 1}
		`;
if (output !== 'Value of x is: \n\t\t10 \n\t\tand adding one to it gives 11\n\t\t') {
	$ERROR('[Substitutions] Multi line string with substitution input failed. Expected : Value of x is: 10 and adding one to it gives 11 || Actual : ' + output);
}

x = 10;
output = `The number is ${`${x}`} for sure`;
if (output !== 'The number is 10 for sure') {
	$ERROR('[Substitutions] Basic nesting scenario failed. Expected : The number is 10 for sure || Actual : ' + output);
}
