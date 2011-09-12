// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * Function is the property of global
 *
 * @section 15.3
 * @path 15_Native/15.3_Function_Objects/S15.3_A1.js
 * @description Compare Function with this.Function
 */

var obj = Function;

var thisobj = this.Function;

if (obj !== thisobj) {
  $ERROR('Function is the property of global');
}

