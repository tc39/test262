// Copyright 2012 Google Inc.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @path intl402/ch12/12.3/12.3.js
 * @description Tests that Intl.NumberFormat.prototype is an intance of
 * Intl.NumberFormat.
 * @author: Roozbeh Pournader
 */

var testcase = function() {
  "use strict";

  if (!(Intl.NumberFormat.prototype instanceof Intl.NumberFormat)) {
    $ERROR("Intl.NumberFormat's prototype is not an instance of " +
      "Intl.NumberFormat");
  }
  
  return true;
}
runTestCase(testcase);
