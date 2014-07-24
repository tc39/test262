// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
es5id: 12.10-0-1
description: >
    with does not change declaration scope - vars in with are visible
    outside
includes: [runTestCase.js]
---*/

function testcase() {
  var o = {};
  var f = function () {
	/* capture foo binding before executing with */
	return foo;
      }

  with (o) {
    var foo = "12.10-0-1";
  }

  return f()==="12.10-0-1"

 }
runTestCase(testcase);
