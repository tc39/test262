// Copyright (c) 2014 Ryan Lewis. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es6id: 20.2.2.18
author: Ryan Lewis
description: >
    Math.hypot should return NaN if called with any argument that is
    NaN.
includes: [runTestCase.js]
---*/

function testcase() {
  if(Number.isNaN(Math.hypot(NaN, 3))) {
  	return true;
  }
 }
runTestCase(testcase);
