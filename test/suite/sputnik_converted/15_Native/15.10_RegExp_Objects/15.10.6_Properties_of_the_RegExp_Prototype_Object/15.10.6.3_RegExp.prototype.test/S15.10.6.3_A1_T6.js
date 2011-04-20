// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S15.10.6.3_A1_T6;
* @section: 15.10.6.3;
* @assertion: Equivalent to the expression RegExp.prototype.exec(string) != null;
* @description: RegExp is /(z)((a+)?(b+)?(c))* / and tested string is (function(){return "zaacbbbcac"})();
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.10.6.3_A1_T6",

path: "15_Native\15.10_RegExp_Objects\15.10.6_Properties_of_the_RegExp_Prototype_Object\15.10.6.3_RegExp.prototype.test\S15.10.6.3_A1_T6.js",

assertion: "Equivalent to the expression RegExp.prototype.exec(string) != null",

description: "RegExp is /(z)((a+)?(b+)?(c))* / and tested string is (function(){return \"zaacbbbcac\"})()",

test: function testcase() {
   __re = /(z)((a+)?(b+)?(c))*/;

//CHECK#0
if (__re.test((function(){return "zaacbbbcac"})()) !== (__re.exec((function(){return "zaacbbbcac"})()) !== null)) {
	$ERROR('#0: __re = /(z)((a+)?(b+)?(c))*/; __re.test((function(){return "zaacbbbcac"})()) === (__re.exec((function(){return "zaacbbbcac"})()) !== null)');
}


 }
});

