// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * Appearing of "return" without a function body leads to syntax error
 *
 * @id: S12.9_A1_T3;
 * @section: 12.9;
 * @description: Checking if execution of "return" within "try" statement fails;
 * @negative;
 */

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
try {
    return 1;
} catch(e){
    return 1;
}
//
//////////////////////////////////////////////////////////////////////////////

