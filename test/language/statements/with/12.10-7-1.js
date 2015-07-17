// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 12.10-7-1
description: with introduces scope - restores the earlier environment on exit
includes: [runTestCase.js]
flags: [noStrict]
---*/

function testcase() {
  var a = 1;

  var o = {a : 2};
  try
  {
    with (o) {
      a = 3;
      throw 1;
      a = 4;
    }
  }
  catch(e)
  {}

  if (a === 1 && o.a === 3) {
      return true;
  }

 }
runTestCase(testcase);
