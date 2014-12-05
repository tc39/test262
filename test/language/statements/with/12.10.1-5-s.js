// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
es5id: 12.10.1-5-s
description: >
    with statement allowed in nested Function even if its container
    Function is strict)
flags: [onlyStrict]
includes: [runTestCase.js]
---*/

function testcase() {
  
    Function("\'use strict\'; var f1 = Function( \"var o = {}; with (o) {};\")");
    return true;
  
 }
runTestCase(testcase);
