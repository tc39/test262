// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * String.prototype.search (regexp) without arguments behaves like with argument "undefined"
 *
 * @section: 15.5.4.12;
 * @path: 15_Native/15.5_String_Objects/15.5.4_Properties_of_the_String_Prototype_Object/15.5.4.12_String.prototype.search/S15.5.4.12_A1.1_T1.js;
 * @description: Call search() is the same search(undefined);
 */

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
var x = "".search();
//
//////////////////////////////////////////////////////////////////////////////

