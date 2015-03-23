// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
es5id: 12.14-13
description: catch introduces scope - updates are based on scope
includes: [runTestCase.js]
flags: [noStrict]
---*/

function testcase() {
        var res1 = false;
        var res2 = false;
        var res3 = false;

        var x_12_14_13 = 'local';
        try {
            function foo() {
                this.x_12_14_13 = 'instance';
            }

            try {
                throw foo;
            }
            catch (e) {
                res1 = (x_12_14_13 === 'local');
                e();
                res2 = (x_12_14_13 === 'local');
            }
            res3 = (x_12_14_13 === 'local');

            if (res1 === true &&
                res2 === true &&
                res3 === true) {
                return true;
            }
        } finally {
            delete this.x_12_14_13;
        }
    }
runTestCase(testcase);
