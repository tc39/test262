// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * The decodeURI property can't be used as constructor
 *
 * @id: S15.1.3.1_A5.7;
 * @section: 15.1.3.1, 11.2.2;
 * @description: If property does not implement the internal [[Construct]] method, throw a TypeError exception;
 */

//CHECK#1

try {
  new decodeURI();
  $ERROR('#1.1: new decodeURI() throw TypeError. Actual: ' + (new decodeURI()));
} catch (e) {
  if ((e instanceof TypeError) !== true) {
    $ERROR('#1.2: new decodeURI() throw TypeError. Actual: ' + (e));
  }
}

