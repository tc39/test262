// Copyright 2012 Google Inc. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @path intl402/ch09/9.1/9.1.1_2_4.js
 * @description Tests initialization of LocaleList object with non-string parameters.
 */

function testcase() {
  "use strict";
    
  var passed = false;

  var list = undefined;
  try {
    list = new Intl.LocaleList([5]);
  } catch(e) {
    if (!(e instanceof TypeError)) {
      $ERROR('LocaleList should throw TypeError exception for non-string argument.');
    }
  }
  if (list !== undefined) {
    $ERROR('LocaleList should throw TypeError exception for non-string argument.');
  }

  passed = true;
    
  return passed; 
}
runTestCase(testcase);