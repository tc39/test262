// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S15.10.2.8_A3_T18;
* @section: 15.10.2.8;
* @assertion: Parentheses of the form ( Disjunction ) serve both to group the components of the Disjunction pattern together and to save the result of the match. 
* The result can be used either in a backreference (\ followed by a nonzero decimal number), 
* referenced in a replace string, 
* or returned as part of an array from the regular expression matching function;
* @description: see bug  http:bugzilla.mozilla.org/show_bug.cgi?id=169534;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.10.2.8_A3_T18",

path: "15_Native\15.10_RegExp_Objects\15.10.2_Pattern_Semantics\15.10.2.8_Atom\S15.10.2.8_A3_T18.js",

assertion: "Parentheses of the form ( Disjunction ) serve both to group the components of the Disjunction pattern together and to save the result of the match.",

description: "see bug  http:bugzilla.mozilla.org/show_bug.cgi?id=169534",

test: function testcase() {
   __replaced = "To sign up click |here|https:www.xxxx.org/subscribe.htm|".replace(/(\|)([\w\x81-\xff ]*)(\|)([\/a-z][\w:\/\.]*\.[a-z]{3,4})(\|)/ig, '<a href="$4">$2</a>');

__expected = 'To sign up click <a href="https:www.xxxx.org/subscribe.htm">here</a>';

//CHECK#1
if (__replaced !== __expected) {
	$ERROR('#1: __replaced = "To sign up click |here|https:www.xxxx.org/subscribe.htm|".replace(/(\\|)([\\w\\x81-\\xff ]*)(\\|)([\\/a-z][\\w:\\/\\.]*\\.[a-z]{3,4})(\\|)/ig, \'<a href="$4">$2</a>\'); __replaced === ' + __expected + '. Actual: ' + __replaced);
}


 }
});

