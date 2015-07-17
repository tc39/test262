// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.14-2-3
description: Object.keys returns the standard built-in Array (Array overridden)
includes: [runTestCase.js]
---*/

function testcase() {
  function Array() { }

  var o = { x: 1, y: 2};

  var a = Object.keys(o);

  var s = Object.prototype.toString.call(a);
  if (s === '[object Array]') {
    return true;
  }
 }
runTestCase(testcase);
