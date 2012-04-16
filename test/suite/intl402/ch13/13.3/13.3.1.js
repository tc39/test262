// Copyright 2012 Google Inc.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @path intl402/ch13/13.3/13.3.1.js
 * @description Tests that Intl.DateTimeFormat.prototype.constructor is the
 * Intl.DateTimeFormat.
 * @author: Roozbeh Pournader
 */

var testcase = function() {
  "use strict";

  if (Intl.DateTimeFormat.prototype.constructor !== Intl.DateTimeFormat) {
    $ERROR("Intl.DateTimeFormat.prototype.constructor is not the same as "
          +"Intl.DateTimeFormat");
  }
  
  return true;
}
runTestCase(testcase);
