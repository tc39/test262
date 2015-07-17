// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 10.4.3-1-1-s
description: this is not coerced to an object in strict mode (Number)
flags: [noStrict]
includes: [runTestCase.js]
---*/

function testcase() {

  function foo()
  {
    'use strict';
    return typeof(this);
  }

  function bar()
  {
    return typeof(this);
  }


  return foo.call(1) === 'number' && bar.call(1) === 'object';
 }
runTestCase(testcase);
