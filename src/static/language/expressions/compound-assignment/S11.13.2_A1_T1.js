// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: >
    White Space and Line Terminator between LeftHandSideExpression and "@="
    or between "@=" and AssignmentExpression are allowed
es5id: 11.13.2_A1_T1
description: Checking by using eval, check operator is x *= y
---*/

var x;

//CHECK#1
x = -1;
if ((eval("x\u0009*=\u0009-1")) !== 1) {
  $ERROR('#1: x = -1; (x\\u0009*=\\u0009-1) === 1');
}

//CHECK#2
x = -1;
if ((eval("x\u000B*=\u000B-1")) !== 1) {
  $ERROR('#2: x = -1; (x\\u000B*=\\u000B-1) === 1');  
}

//CHECK#3
x = -1;
if ((eval("x\u000C*=\u000C-1")) !== 1) {
  $ERROR('#3: x = -1; (x\\u000C*=\\u000C-1) === 1');
}

//CHECK#4
x = -1;
if ((eval("x\u0020*=\u0020-1")) !== 1) {
  $ERROR('#4: x = -1; (x\\u0020*=\\u0020-1) === 1');
}

//CHECK#5
x = -1;
if ((eval("x\u00A0*=\u00A0-1")) !== 1) {
  $ERROR('#5: x = -1; (x\\u00A0*=\\u00A0-1) === 1');
}

//CHECK#6
x = -1;
if ((eval("x\u000A*=\u000A-1")) !== 1) {
  $ERROR('#6: x = -1; (x\\u000A*=\\u000A-1) === 1');  
}

//CHECK#7
x = -1;
if ((eval("x\u000D*=\u000D-1")) !== 1) {
  $ERROR('#7: x = -1; (x\\u000D*=\\u000D-1) === 1');
}

//CHECK#8
x = -1;
if ((eval("x\u2028*=\u2028-1")) !== 1) {
  $ERROR('#8: x = -1; (x\\u2028*=\\u2028-1) === 1');
}

//CHECK#9
x = -1;
if ((eval("x\u2029*=\u2029-1")) !== 1) {
  $ERROR('#9: x = -1; (x\\u2029*=\\u2029-1) === 1');
}


//CHECK#10
x = -1;
if ((eval("x\u0009\u000B\u000C\u0020\u00A0\u000A\u000D\u2028\u2029*=\u0009\u000B\u000C\u0020\u00A0\u000A\u000D\u2028\u2029-1")) !== 1) {
  $ERROR('#10: x = -1; (x\\u0009\\u000B\\u000C\\u0020\\u00A0\\u000A\\u000D\\u2028\\u2029*=\\u0009\\u000B\\u000C\\u0020\\u00A0\\u000A\\u000D\\u2028\\u2029-1) === 1');
}
