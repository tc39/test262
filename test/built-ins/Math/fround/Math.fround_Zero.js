// Copyright (c) 2014 Ryan Lewis. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es6id: 20.2.2.17
author: Ryan Lewis
description: Math.fround should return 0 if called with 0.
includes: [runTestCase.js]
---*/

function testcase() {
  if(Math.fround(0) === 0) {
  	return true;
  }
 }
runTestCase(testcase);
