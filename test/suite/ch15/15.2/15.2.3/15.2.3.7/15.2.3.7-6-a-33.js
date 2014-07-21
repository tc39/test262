// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
description: >
    Object.defineProperties - 'P' doesn't exist in 'O', test [[Get]]
    of 'P' is set as undefined value if absent in accessor descriptor
    'desc' (8.12.9 step 4.b)
includes:
    - runTestCase.js
    - accessorPropertyAttributesAreCorrect.js
---*/

function testcase() {
        var obj = {};
        var setFun = function (value) {
            obj.setVerifyHelpProp = value;
        };

        Object.defineProperties(obj, {
            prop: {
                set: setFun,
                enumerable: true,
                configurable: true
            }
        });
        return accessorPropertyAttributesAreCorrect(obj, "prop", undefined, setFun, "setVerifyHelpProp", true, true);

    }
runTestCase(testcase);
