// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * Function.prototype.call can't be used as [[create]] caller
 *
 * @section: 15.3.4.4;
 * @path: 15_Native/15.3_Function_Objects/15.3.4_Properties_of_the_Function_Prototype_Object/15.3.4.4_Function.prototype.call/S15.3.4.4_A7_T5.js;
 * @description: Checking if creating "new Function("this.p1=1").call" fails;
 */

try {
  var FACTORY = Function("this.p1=1").call;
  var obj = new FACTORY();
  $ERROR('#1: Function.prototype.call can\'t be used as [[create]] caller');
} catch (e) {
  if (!(e instanceof TypeError)) {
  	$ERROR('#1.1: Function.prototype.call can\'t be used as [[create]] caller');
  }
}

