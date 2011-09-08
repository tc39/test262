// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * Function expession inside the "if" expression is allowed
 *
 * @section: 12.5;
 * @path: 12_Statement/12.5_The_if_Statement/S12.5_A10_T2.js;
 * @description: Using function expession "function __func(){return 0;}()" within "if" expression;
 */

//////////////////////////////////////////////////////////////////////////////
//CHECK#
if(function __func(){return 0;}()){
    $ERROR('#1: Function expession inside the if expression is allowed');
}else {
    ;
}
//
//////////////////////////////////////////////////////////////////////////////

