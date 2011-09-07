// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * Function expession inside the "if" expression is allowed
 *
 * @id: S12.5_A10_T2;
 * @section: 12.5;
 * @description: : Using function expession "function __func(){return 0;}()" within "if" expression;;
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

