// Copyright 2012 Google Inc. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @path intl402/ch09/9.1/9.1.1_2_3.js
 * @description Tests that language ID gets canonicalized in LocaleList.
 */

function testcase() {
  "use strict";
    
  var passed = false;

  var list = new Intl.LocaleList(['SR-CYRL-rS']);
  if (list[0] !== 'sr-Cyrl-RS') {
    $ERROR('Locale ' + list[0] + ' was not properly canonicalized.');
  }

  passed = true;
    
  return passed; 
}
runTestCase(testcase);