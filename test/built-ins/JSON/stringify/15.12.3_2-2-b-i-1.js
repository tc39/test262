// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.12.3_2-2-b-i-1
description: >
    JSON.stringify converts string wrapper objects returned from a
    toJSON call to literal strings.
includes: [runTestCase.js]
---*/

function testcase() {
  var obj = {
    prop:42,
    toJSON: function () {return 'fortytwo objects'}
    };
  return JSON.stringify([obj]) === '["fortytwo objects"]';
  }
runTestCase(testcase);
