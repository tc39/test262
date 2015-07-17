// Copyright (c) 2014 Ryan Lewis. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Ryan Lewis
description: >
    endsWith should return true when called on 'word' and passed 'r',
    with an endPosition of 3.
includes: [runTestCase.js]
features: [String#endsWith]
---*/

function testcase() {
  if('word'.endsWith('r', 3) === true) {
  	return true;
  }
 }
runTestCase(testcase);
