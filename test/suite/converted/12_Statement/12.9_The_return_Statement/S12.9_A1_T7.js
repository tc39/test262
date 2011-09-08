// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * Appearing of "return" without a function body leads to syntax error
 *
 * @section: 12.9;
 * @path: 12_Statement/12.9_The_return_Statement/S12.9_A1_T7.js;
 * @description: Checking if execution of "return x" with no function, placed inside Block, fails;
 * @negative;
 */

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
{
    var x=1;
    return x;
    var y=2;
}
//
//////////////////////////////////////////////////////////////////////////////

