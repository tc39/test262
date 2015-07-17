// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 12.10-0-8
description: with introduces scope - var initializer sets like named property
includes: [runTestCase.js]
flags: [noStrict]
---*/

function testcase() {
  var o = {foo: 42};

  with (o) {
    var foo = "set in with";
  }

  return o.foo === "set in with";
 }
runTestCase(testcase);
