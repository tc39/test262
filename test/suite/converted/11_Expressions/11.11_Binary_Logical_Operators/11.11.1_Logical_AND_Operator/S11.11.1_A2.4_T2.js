// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * First expression is evaluated first, and then second expression
 *
 * @section: 11.11.1;
 * @path: 11_Expressions/11.11_Binary_Logical_Operators/11.11.1_Logical_AND_Operator/S11.11.1_A2.4_T2.js;
 * @description: Checking with "throw";
 */

//CHECK#1
var x = function () { throw "x"; };
var y = function () { throw "y"; };
try {
   x() && y();
   $ERROR('#1.1: var x = function () { throw "x"; }; var y = function () { throw "y"; }; x() && y() throw "x". Actual: ' + (x() && y()));
} catch (e) {
   if (e === "y") {
     $ERROR('#1.2: First expression is evaluated first, and then second expression');
   } else {
     if (e !== "x") {
       $ERROR('#1.3: var x = function () { throw "x"; }; var y = function () { throw "y"; }; x() && y() throw "x". Actual: ' + (e));
     }
   }
}

