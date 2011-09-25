// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * When the Object function is called with one argument value,
 * and the value neither is null nor undefined, and is supplied, return ToObject(value)
 *
 * @path 15_Native/15.2_Object_Objects/15.2.1_The_Object_Constructor_Called_as_a_Function/S15.2.1.1_A2_T11.js
 * @description Calling Object function with function declaration as argument value
 */

//CHECK#1
if (typeof func !== 'undefined') {
  $ERROR('#1:  function expression can\'t be declarated');
}

var n_obj = Object(function func(){return 1;});

//CHECK#2
if ((n_obj.constructor !== Function)||(n_obj()!==1)) {
  $ERROR('#2: Object(function func(){return 1;}) returns function');
}

//CHECK#3
if (typeof func !== 'undefined') {
  $ERROR('#3:  function expression can\'t be declarated');
}


