// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S13.2.2_A19_T8;
* @section: 13.2.2;
* @assertion: Function's scope chain is started when it is declared;
* @description: Function is declared multiply times;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S13.2.2_A19_T8",

path: "13_Function_Definition\13.2_Creating_Function_Objects\S13.2.2_A19_T8.js",

assertion: "Function\'s scope chain is started when it is declared",

description: "Function is declared multiply times",

test: function testcase() {
   //////////////////////////////////////////////////////////////////////////////
//CHECK#0
if (typeof __func !== "undefined") {
	$ERROR('#0: typeof __func === "undefined". Actual: typeof __func ==='+typeof __func);
}
//
//////////////////////////////////////////////////////////////////////////////

var a = 1, b = "a";

var __obj = {a:2};

with (__obj)
{
    while(1){
        var  __func = function()
        {
            return a;
        }
        break;
    }
}

delete __obj;

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
if (__func() !== 2) {
	$ERROR('#1: __func() === 2. Actual: __func() ==='+__func());
}
//
//////////////////////////////////////////////////////////////////////////////

var __obj = {a:3,b:"b"};

with (__obj)
{
    var __func = function()
    {
        return b;
    }
}

delete __obj;

//////////////////////////////////////////////////////////////////////////////
//CHECK#2
if (__func()!=="b") {
	$ERROR('#2: __func()==="b". Actual: __func()==='+__func());
}
//
//////////////////////////////////////////////////////////////////////////////

with ({a:99,b:"c"})
{
    //////////////////////////////////////////////////////////////////////////////
    //CHECK#3
    if (__func() !== "b") {
    	$ERROR('#3: __func()==="b". Actual: __func()==='+__func());
    }
    //
    //////////////////////////////////////////////////////////////////////////////
}

 }
});

