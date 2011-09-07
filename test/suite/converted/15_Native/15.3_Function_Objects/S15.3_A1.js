// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * Function is the property of global
 *
 * @id: S15.3_A1;
 * @section: 15.3;
 * @description: Compare Function with this.Function;
 */

var obj = Function;

var thisobj = this.Function;

if (obj !== thisobj) {
  $ERROR('Function is the property of global');
}

