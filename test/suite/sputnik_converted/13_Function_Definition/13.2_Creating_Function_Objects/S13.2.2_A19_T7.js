// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S13.2.2_A19_T7;
* @section: 13.2.2;
* @assertion: Function's scope chain is started when it is declared;
* @description: Function is declared in the object scope as a variable;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S13.2.2_A19_T7",

path: "13_Function_Definition\13.2_Creating_Function_Objects\S13.2.2_A19_T7.js",

assertion: "Function\'s scope chain is started when it is declared",

description: "Function is declared in the object scope as a variable",

test: function testcase() {
   var a = 1;

var __obj = {a:2};

with (__obj)
{
    var __func = function()
    {
        return a;
    }
}

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
if (__obj.hasOwnProperty('__func')) {
	$ERROR('#1: __obj.hasOwnProperty(\'__func\') === false');
}
//
//////////////////////////////////////////////////////////////////////////////

///////////////////////////////////// /////////////////////////////////////////
//CHECK#2
if (!(this.hasOwnProperty('__func'))) {
	$ERROR('#2: this.hasOwnProperty(\'__func\') === true');
}
//
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
//CHECK#3
if (__func in __obj) {
	$ERROR('#3: (__func in __obj) === false');
}
//
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
//CHECK#4
if (this.__func === undefined) {
	$ERROR('#4: this.__func !== undefined');
}
//
//////////////////////////////////////////////////////////////////////////////

 }
});

