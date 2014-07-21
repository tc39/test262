// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: >
    "in"-expression is not allowed as a ExpressionNoIn in "for
    (ExpressionNoIn; FirstExpression; SecondExpression) Statement"
    IterationStatement
description: Checking if execution of "for (var a in arr;1;){}" fails
flags: [negative]
---*/

arr = [1,2,3,4,5];

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
for (var a in arr;1;){
    break;
}
//
//////////////////////////////////////////////////////////////////////////////
