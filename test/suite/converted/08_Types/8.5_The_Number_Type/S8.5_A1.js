// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * NaN !== NaN
 *
 * @section 8.5, 7.8.3
 * @path 08_Types/8.5_The_Number_Type/S8.5_A1.js
 * @description Compare NaN with NaN
 */

var x = Number.NaN;
var x_ = Number.NaN;

///////////////////////////////////////////////////////
// CHECK #1
if (x === x_){
  $ERROR('#1: NaN !== NaN ');
}
//
//////////////////////////////////////////////////////////

