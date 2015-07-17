// Copyright (c) 2014 Ryan Lewis. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es6id: 20.2.2.11
author: Ryan Lewis
description: Math.clz32 should return 31 if passed 1.
includes: [runTestCase.js]
---*/

function testcase() {
  if(Math.clz32(1) === 31) {
  	return true;
  }
 }
runTestCase(testcase);
