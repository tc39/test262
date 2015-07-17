// Copyright (c) 2014 Ryan Lewis. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es6id: 20.2.2.18
author: Ryan Lewis
description: Math.hypot.length should return 2.
includes: [runTestCase.js]
---*/

function testcase() {
  if(Math.hypot.length === 2) {
  	return true;
  }
 }
runTestCase(testcase);
