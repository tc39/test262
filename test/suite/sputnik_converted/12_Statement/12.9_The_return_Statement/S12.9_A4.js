// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S12.9_A4;
* @section: 12.9;
* @assertion: The production ReturnStatement : return Expression; is evaluated as:
* i)   Evaluate Expression.
* ii)  Call GetValue(Result(2)).
* iii) Return (return, Result(3), empty);
* @description: Return very sophisticated expression and function;
*/



// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S12.9_A4",

path: "12_Statement\12.9_The_return_Statement\S12.9_A4.js",

assertion: "The production ReturnStatement : return Expression; is evaluated as:",

description: "Return very sophisticated expression and function",

test: function testcase() {
   // second derivative 
function DD_operator(f, delta){return function(x){return (f(x+delta)-2*f(x)+f(x-delta))/(delta*delta)};}

DDsin = DD_operator(Math.sin, 0.00001);


//////////////////////////////////////////////////////////////////////////////
//CHECK#1
// ((sin(x))')' = -sin(x)
if (DDsin( Math.PI/2 ) + Math.sin( Math.PI/2 ) > 0.00001) {
	$ERROR('#1: return Expression yields to Return (return, GetValue(Evaluate Expression), empty)');
}
//
//////////////////////////////////////////////////////////////////////////////

 }
});

