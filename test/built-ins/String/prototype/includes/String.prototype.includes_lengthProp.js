// Copyright (c) 2014 Ryan Lewis. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Ryan Lewis
description: String should have the property length with size of 1.
includes: [runTestCase.js]
features: [String#includes]
---*/

function testcase() {
  if('word'.includes.length === 1) {
  	return true;
  }
 }
runTestCase(testcase);
