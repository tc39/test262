// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: >
    This test is actually testing the [[Delete]] internal method (8.12.8). Since the
    language provides no way to directly exercise [[Delete]], the tests are placed here.
es5id: 11.4.1-4.a-10
description: >
    delete operator returns true for property (stringify) defined on
    built-in object (JSON)
includes: [runTestCase.js]
---*/

function testcase() {
  try {
      var o = JSON.stringify;
	  var desc;
	  try {
	  	desc = Object.getOwnPropertyDescriptor(JSON, 'stringify')
	  } 
	  catch (e) {
	  };
      var d = delete JSON.stringify;
      if (d === true && JSON.stringify === undefined) {
        return true;
      }
  } finally {
    if (desc) Object.defineProperty(JSON, 'stringify', desc)
	else JSON.stringify = o  /* this branch messes up the attributes */;
  }
 }
runTestCase(testcase);
