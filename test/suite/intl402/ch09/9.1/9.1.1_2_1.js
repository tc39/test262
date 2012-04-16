// Copyright 2012 Google Inc. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @path intl402/ch09/9.1/9.1.1_2_1.js
 * @description Tests initialization of LocaleList object with an empty list.
 */

function testcase() {
  "use strict";
    
  var passed = false;

  var list = new Intl.LocaleList([]);
  if (list.length !== 0) {
    $ERROR('LocaleList constructed with empty list should have 0 elements.');
  }

  passed = true;
    
  return passed; 
}
runTestCase(testcase);