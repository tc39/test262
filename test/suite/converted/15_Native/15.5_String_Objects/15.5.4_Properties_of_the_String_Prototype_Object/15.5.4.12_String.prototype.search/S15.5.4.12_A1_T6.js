// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * String.prototype.search (regexp)
 *
 * @section: 15.5.4.12;
 * @path: 15_Native/15.5_String_Objects/15.5.4_Properties_of_the_String_Prototype_Object/15.5.4.12_String.prototype.search/S15.5.4.12_A1_T6.js;
 * @description: Argument is x, and instance is new String, x is undefined variable;
 */

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
//since ToString(undefined) evaluates to "undefined" search(undefined) evaluates to search("undefined")
if (new String("undefined").search(x) !== 0) {
  $ERROR('#1: var x; new String("undefined").search(x) === 0. Actual: '+new String("undefined").search(x) );
}
//
//////////////////////////////////////////////////////////////////////////////

var x;

