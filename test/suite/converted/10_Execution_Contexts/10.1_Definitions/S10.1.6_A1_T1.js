// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * The activation object is initialised with a property with name arguments and attributes {DontDelete}
 *
 * @section: 10.1.6;
 * @path: 10_Execution_Contexts/10.1_Definitions/S10.1.6_A1_T1.js;
 * @description: Checking ifdeleting function parameter is possible;
 */

//CHECK#1
function f1(a){
  delete a;
  return a;
}
if (f1(1) !== 1)
  $ERROR('#1: Function parameter was deleted');
  

