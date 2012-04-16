// Copyright 2012 Google Inc.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @path intl402/ch13/13.3/13.3.js
 * @description Tests that Intl.DateTimeFormat.prototype is an intance of
 * Intl.DateTimeFormat.
 * @author: Roozbeh Pournader
 */

var testcase = function() {
  "use strict";

  if (!(Intl.DateTimeFormat.prototype instanceof Intl.DateTimeFormat)) {
    $ERROR("Intl.DateTimeFormat's prototype is not an instance of " +
      "Intl.DateTimeFormat");
  }
  
  return true;
}
runTestCase(testcase);
