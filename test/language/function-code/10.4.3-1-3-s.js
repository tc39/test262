// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 10.4.3-1-3-s
description: this is not coerced to an object in strict mode (undefined)
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
  return foo.call(undefined) === 'undefined' && bar.call() === 'object';
 }
runTestCase(testcase);
