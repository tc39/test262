// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
es5id: 12.2.1-6-s
description: >
    eval - a Function assigning into 'eval' will not throw any error
    if contained within strict mode and its body does not start with
    strict mode
flags: [onlyStrict]
includes: [runTestCase.js]
---*/

function testcase() {
  'use strict';
  
    var f = Function('eval = 42;');
    f();
    return true;
 }
runTestCase(testcase);
