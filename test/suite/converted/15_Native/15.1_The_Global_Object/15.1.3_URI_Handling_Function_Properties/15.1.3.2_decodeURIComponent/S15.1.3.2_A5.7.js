// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * The decodeURIComponent property can't be used as constructor
 *
 * @path 15_Native/15.1_The_Global_Object/15.1.3_URI_Handling_Function_Properties/15.1.3.2_decodeURIComponent/S15.1.3.2_A5.7.js
 * @description If property does not implement the internal [[Construct]] method, throw a TypeError exception
 */

//CHECK#1

try {
  new decodeURIComponent();
  $ERROR('#1.1: new decodeURIComponent() throw TypeError. Actual: ' + (new decodeURIComponent()));
} catch (e) {
  if ((e instanceof TypeError) !== true) {
    $ERROR('#1.2: new decodeURIComponent() throw TypeError. Actual: ' + (e));
  }
}

