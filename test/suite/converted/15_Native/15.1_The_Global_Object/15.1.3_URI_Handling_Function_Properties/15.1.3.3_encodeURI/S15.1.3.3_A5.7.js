// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * The encodeURI property can't be used as constructor
 *
 * @section 15.1.3.3, 11.2.2
 * @path 15_Native/15.1_The_Global_Object/15.1.3_URI_Handling_Function_Properties/15.1.3.3_encodeURI/S15.1.3.3_A5.7.js
 * @description If property does not implement the internal [[Construct]] method, throw a TypeError exception
 */

//CHECK#1

try {
  new encodeURI();
  $ERROR('#1.1: new encodeURI() throw TypeError. Actual: ' + (new encodeURI()));
} catch (e) {
  if ((e instanceof TypeError) !== true) {
    $ERROR('#1.2: new encodeURI() throw TypeError. Actual: ' + (e));
  }
}

