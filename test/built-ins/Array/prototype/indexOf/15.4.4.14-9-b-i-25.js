// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
es5id: 15.4.4.14-9-b-i-25
description: >
    Array.prototype.indexOf applied to Arguments object which
    implements its own property get method (number of arguments is
    less than number of parameters)
includes: [runTestCase.js]
---*/

function testcase() {

        var func = function (a, b) {
            return 0 === Array.prototype.indexOf.call(arguments, arguments[0]) &&
            -1 === Array.prototype.indexOf.call(arguments, arguments[1]);
        };

        return func(true);
    }
runTestCase(testcase);
