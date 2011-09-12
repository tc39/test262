// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * The activation object is initialised with a property with name arguments and attributes {DontDelete}
 *
 * @section 10.1.6
 * @path 10_Execution_Contexts/10.1_Definitions/S10.1.6_A1_T3.js
 * @description Checking function which returns "this"
 */

function f1() {
  if (delete arguments) {
    $ERROR("#1: Function parameters have attribute {DontDelete}" + arguments);
  }
  return arguments;
}

f1();

