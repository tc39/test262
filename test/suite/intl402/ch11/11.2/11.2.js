// Copyright 2012 Google Inc.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @path intl402/ch11/11.2/11.2.js
 * @description Tests that the Intl.Collator constructor has a length
 * property that equals 2.
 */

var testcase = function() {
  "use strict";

  if (!Intl.Collator.hasOwnProperty('length')) {
    $ERROR('Intl.Collator has no length property');
  }

  if (Intl.Collator.length != 2) {
    $ERROR('Intl.Collator.length is not 2.');
  }

  return true;
}
runTestCase(testcase);
