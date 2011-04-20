// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S11.2.4_A1.4_T3;
* @section: 11.2.4, 11.2.3, 10.1.8;
* @assertion: Arguments : (ArgumentList : ArgumentList, AssignmentExpression);
* @description: Return an internal list whose length is one greater than the 
* length of ArgumentList and whose items are the items of ArgumentList, in order, 
* followed at the end by GetValue(AssignmentExpression), which is the last item of 
* the new list;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S11.2.4_A1.4_T3",

path: "11_Expressions\11.2_Left_Hand_Side_Expressions\11.2.4_Argument_Lists\S11.2.4_A1.4_T3.js",

assertion: "Arguments : (ArgumentList : ArgumentList, AssignmentExpression)",

description: "Return an internal list whose length is one greater than the",

test: function testcase() {
   function f_arg(x,y,z) {
  return z;
}

//CHECK#1
if (f_arg(x=1,y=x,x+y) !== 2) {
  $ERROR('#1: function f_arg(x,y,z) {return z;} f_arg(x=1,y=x,x+y) === 2. Actual: ' + (f_arg(x=1,y=x,x+y)));    
}

 }
});

