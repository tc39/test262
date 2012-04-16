// Copyright 2012 Google Inc.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @path intl402/ch11/11.3/11.3.1.js
 * @description Tests that Intl.Collator.prototype.constructor is the
 * Intl.Collator.
 */

var testcase = function() {
  "use strict";

  if (Intl.Collator.prototype.constructor !== Intl.Collator) {
    $ERROR("Intl.Collator.prototype.constructor is not the same as " +
           "Intl.Collator");
  }

  return true;
}
runTestCase(testcase);
