// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S15.8.2.5_A15;
 * @section: 15.8.2.5;
 * @assertion: If y>0 and y is finite and x is equal to -Infinity, Math.atan2(y,x) is an implementation-dependent approximation to +PI;
 * @description: Checking if Math.atan2(y,x) is an approximation to +PI, where y>0 and y is finite and x is equal to -Infinity;
 */


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.8.2.5_A15",

path: "15_Native\15.8_The_Math_Object\15.8.2_Function_Properties_of_the_Math_Object\15.8.2.5_atan2\S15.8.2.5_A15.js",

assertion: "If y>0 and y is finite and x is equal to -Infinity, Math.atan2(y,x) is an implementation-dependent approximation to +PI",

description: "Checking if Math.atan2(y,x) is an approximation to +PI, where y>0 and y is finite and x is equal to -Infinity",

test: function testcase() {
   $INCLUDE("math_precision.js");
$INCLUDE("math_isequal.js"); 
 
// CHECK#1
x = -Infinity;
y = new Array();
y[0] = 0.000000000000001;
y[1] = 1;
y[2] = 1.7976931348623157E308; //largest finite number 
ynum = 3;

for (i = 0; i < ynum; i++)
{
	if (!isEqual(Math.atan2(y[i],x),Math.PI))
		$FAIL("#1: Math.abs(Math.atan2(" + y[i] + ", " + x + ") - Math.PI) >= " + prec);
}

 }
});

