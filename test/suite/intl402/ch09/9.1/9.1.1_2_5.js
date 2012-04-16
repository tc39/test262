// Copyright 2012 Google Inc. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @path intl402/ch09/9.1/9.1.1_2_5.js
 * @description Tests initialization of LocaleList object with invalid locale IDs.
 */

function testcase() {
  "use strict";
    
  var passed = false;

  var list = undefined;
  try {
    list = new Intl.LocaleList(['']);
  } catch(e) {
    // Throws invalid language tag exception.
  }
  if (list !== undefined) {
    $ERROR('Empty string should be an invalid locale identifier.');
  }

  passed = true;
    
  return passed; 
}
runTestCase(testcase);