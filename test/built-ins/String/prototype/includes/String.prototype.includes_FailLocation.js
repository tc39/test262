// Copyright (c) 2014 Ryan Lewis. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Ryan Lewis
description: >
    String should return false if a letter is not found in the word
    starting from the passed location.
includes: [runTestCase.js]
features: [String#includes]
---*/

function testcase() {
  if('word'.includes('o', 3) === false) {
  	return true;
  }
 }
runTestCase(testcase);
