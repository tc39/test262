// Copyright (c) 2014 Ryan Lewis. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Ryan Lewis
description: >
    String should return true when called on 'word' and passed 'w' and
    with no location (defaults to 0).
includes: [runTestCase.js]
features: [String#includes]
---*/

function testcase() {
  if('word'.includes('w') === true) {
  	return true;
  }
 }
runTestCase(testcase);
