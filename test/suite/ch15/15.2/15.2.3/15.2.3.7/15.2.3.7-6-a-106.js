// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
description: >
    Object.defineProperties - 'P' is accessor property, P.[[Set]] is
    undefined and properties.[[Set]] is normal value (8.12.9 step 12)
includes:
    - runTestCase.js
    - accessorPropertyAttributesAreCorrect.js
---*/

function testcase() {

        var obj = {};

        function get_func() {
            return 10;
        }

        Object.defineProperty(obj, "foo", {
            get: get_func,
            set: undefined,
            enumerable: true,
            configurable: true
        });

        function set_func(value) {
            obj.setVerifyHelpProp = value;
        }

        Object.defineProperties(obj, {
            foo: {
                set: set_func
            }
        });
        return accessorPropertyAttributesAreCorrect(obj, "foo", get_func, set_func, "setVerifyHelpProp", true, true);
    }
runTestCase(testcase);
