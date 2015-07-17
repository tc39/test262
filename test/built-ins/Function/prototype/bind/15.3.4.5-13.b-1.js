// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.3.4.5-13.b-1
description: Function.prototype.bind, bound fn has a 'length' own property
includes: [runTestCase.js]
---*/

function testcase() {
  function foo() { }
  var o = {};
  
  var bf = foo.bind(o);
  if (bf.hasOwnProperty('length')) {
    return true;
  }
 }
runTestCase(testcase);
