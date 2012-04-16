// Copyright 2012 Google Inc. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @path intl402/ch08/8.1/8.1.js
 * @description Tests that Intl object has proper constructors.
 */

function testcase() {
  "use strict";
    
  var passed = false;

  if (Intl === undefined) {
    $ERROR('Intl object is undefined.');
  }

  if (typeof Intl.LocaleList !== 'function') {
    $ERROR('Intl.LocaleList is not a function.')
  }

  if (typeof Intl.Collator !== 'function') {
    $ERROR('Intl.Collator is not a function.')
  }

  if (typeof Intl.NumberFormat !== 'function') {
    $ERROR('Intl.NumberFormat is not a function.')
  }

  if (typeof Intl.DateTimeFormat !== 'function') {
    $ERROR('Intl.DateTimeFormat is not a function.')
  }

  passed = true;
    
  return passed; 
}
runTestCase(testcase);