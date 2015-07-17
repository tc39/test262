// Copyright (c) 2014 Ryan Lewis. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es6id: 20.1.2.3
author: Ryan Lewis
description: Number.isInteger should return true if called with an integer.
includes: [runTestCase.js]
---*/

function testcase() {
  if(Number.isInteger(478) === true) {
  	return true;
  }
 }
runTestCase(testcase);
