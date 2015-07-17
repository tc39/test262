// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 10.6-6-3
description: >
    'length' property of arguments object for 0 argument function
    exists
flags: [noStrict]
includes: [runTestCase.js]
---*/

function testcase() {
      var arguments= undefined;
	return (function () {return arguments.length !== undefined})();
 }
runTestCase(testcase);
