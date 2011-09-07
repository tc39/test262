// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * Global object has properties such as built-in objects such as
 * Math, String, Date, parseInt, etc
 *
 * @id: S10.1.5_A1.2_T4;
 * @section: 10.1.5, 15.1;
 * @description: Function execution context - Other Properties;
 */

function test() {
  //CHECK#27
  if ( Math === null ) {
    $ERROR("#27: Math === null");
  }
}

test();

