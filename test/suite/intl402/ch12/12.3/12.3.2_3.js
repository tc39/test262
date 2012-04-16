// Copyright 2012 Google Inc.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @path intl402/ch12/12.3/12.3.2_3.js
 * @description Tests that Intl.NumberFormat.prototype.format
 * doesn't treat all numbers as negative.
 * @author: Roozbeh Pournader
 */

var testcase = function() {
  "use strict";

  var formatter = new Intl.NumberFormat();
  
  if (formatter.format(1) === formatter.format(-1)) {
    $ERROR('Intl.NumberFormat is formatting 1 and -1 the same way.');
  }

  if (formatter.format(-0) !== formatter.format(0)) {
    $ERROR('Intl.NumberFormat is formatting signed zeros differently.');
  }

  return true;
}
runTestCase(testcase);
