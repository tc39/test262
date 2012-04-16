// Copyright 2012 Google Inc.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @path intl402/ch12/12.3/12.3.1.js
 * @description Tests that Intl.NumberFormat.prototype.constructor is the
 * Intl.NumberFormat.
 * @author: Roozbeh Pournader
 */

var testcase = function() {
  "use strict";

  if (Intl.NumberFormat.prototype.constructor !== Intl.NumberFormat) {
    $ERROR("Intl.NumberFormat.prototype.constructor is not the same as "
          +"Intl.NumberFormat");
  }
  
  return true;
}
runTestCase(testcase);
