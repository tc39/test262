// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * The Number prototype object has the property toPrecision
 *
 * @id: S15.7.4_A3.7;
 * @section: 15.7.4;
 * @description: The test uses hasOwnProperty() method;
 */

//CHECK#1
if(Number.prototype.hasOwnProperty("toPrecision") !== true){
  $ERROR('#1: The Number prototype object has the property toPrecision');
}


