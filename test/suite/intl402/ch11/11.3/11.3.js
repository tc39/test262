// Copyright 2012 Google Inc.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @path intl402/ch11/11.3/11.3.js
 * @description Tests that Intl.Collator.prototype is an intance of
 * Intl.Collator.
 */

var testcase = function() {
  "use strict";

  if (!(Intl.Collator.prototype instanceof Intl.Collator)) {
    $ERROR("Intl.Collator's prototype is not an instance of " +
           "Intl.Collator");
  }

  return true;
}
runTestCase(testcase);
