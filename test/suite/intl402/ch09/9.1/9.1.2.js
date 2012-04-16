// Copyright 2012 Google Inc. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @path intl402/ch09/9.1/9.1.2.js
 * @description Tests Intl.LocaleList as a function.
 */

function testcase() {
  "use strict";
    
  var passed = false;

  var list = Intl.LocaleList();

  if (list.length !== 1) {
    $ERROR('LocaleList constructed with no arguments should have 1 element.');
  }

  // Using new Intl.LocaleList and calling Intl.LocaleList should produce the
  // same result.
  if (new Intl.LocaleList()[0] !== list[0]) {
    $ERROR('Intl.LocaleList()[0] should be equal to new Intl.LocaleList()[0]');
  }

  passed = true;
    
  return passed; 
}
runTestCase(testcase);