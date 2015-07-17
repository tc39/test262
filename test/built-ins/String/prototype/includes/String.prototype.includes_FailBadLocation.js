// Copyright (c) 2014 Ryan Lewis. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Ryan Lewis
description: >
    String should return false if a location is passed that is
    greather than the length of the string.
includes: [runTestCase.js]
features: [String#includes]
---*/

function testcase() {
  if('word'.includes('w', 5) === false) {
  	return true;
  }
 }
runTestCase(testcase);
