// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S13_A16;
* @section: 13;
* @assertion: Any separators are admitted between declaration chunks;
* @description: Inserting separators between declaration chunks;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S13.0_A16",

path: "13_Function_Definition\13.0_Chapter\S13.0_A16.js",

assertion: "Any separators are admitted between declaration chunks",

description: "Inserting separators between declaration chunks",

test: function testcase() {
   function
x
(
)
{
}
;

x();

function                                                    y                                   (                                          )                                              {};

y();

function

z

(

)

{
    
}

;

z();

eval("function\u0009\u2029w(\u000C)\u00A0{\u000D};");

w();

 }
});

