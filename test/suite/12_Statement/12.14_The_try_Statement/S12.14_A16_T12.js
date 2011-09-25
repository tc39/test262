// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * TryStatement: "try Block Catch" or "try Block Finally" or "try Block Catch Finally"
 *
 * @path 12_Statement/12.14_The_try_Statement/S12.14_A16_T12.js
 * @description Embedded "try" statements followed by two "catch" statements
 * @negative
 */

// CHECK#1
try
{
  try
  {
  }
}
catch(e1){}
catch(e2){}



