// Copyright 2012 Google Inc.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @path intl402/ch12/12.2/12.2.js
 * @description Tests that the Intl.NumberFormat constructor has a length
 * property that equals 2.
 * @author: Roozbeh Pournader
 */

var testcase = function() {
  "use strict";

  if (!Intl.NumberFormat.hasOwnProperty('length')) {
    $ERROR('Intl.NumberFormat has no length property');
  }
    
  if (Intl.NumberFormat.length != 2) {
    $ERROR('Intl.NumberFormat.length is not 2.');
  }
    
  return true;
}
runTestCase(testcase);
