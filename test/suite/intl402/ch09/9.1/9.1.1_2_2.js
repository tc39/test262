// Copyright 2012 Google Inc. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @path intl402/ch09/9.1/9.1.1_2_2.js
 * @description Tests initialization of LocaleList object with duplicate language IDs.
 */

function testcase() {
  "use strict";
    
  var passed = false;

  var list = new Intl.LocaleList(['sr-rs', 'sr-rs']);
  if (list.length !== 1) {
    $ERROR('Duplicates should be removed from the list.');
  }

  passed = true;
    
  return passed; 
}
runTestCase(testcase);