// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * The reverse property of Array can't be used as constructor
 *
 * @path 15_Native/15.4_Array_Objects/15.4.4_Properties_of_the_Array_Prototype_Object/15.4.4.8_Array_prototype_reverse/S15.4.4.8_A5.7.js
 * @description If property does not implement the internal [[Construct]] method, throw a TypeError exception
 */

//CHECK#1

try {
  new Array.prototype.reverse();
  $ERROR('#1.1: new Array.prototype.reverse() throw TypeError. Actual: ' + (new Array.prototype.reverse()));
} catch (e) {
  if ((e instanceof TypeError) !== true) {
    $ERROR('#1.2: new Array.prototype.reverse() throw TypeError. Actual: ' + (e));
  }
}

