// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
es5id: 15.2.3.7-2-4
description: >
    Object.defineProperties - argument 'Properties' is a Boolean
    object whose primitive value is true
includes: [runTestCase.js]
---*/

function testcase() {

        var obj = {};
        var props = new Boolean(true);
        var result = false;

        Object.defineProperty(props, "prop", {
            get: function () {
                result = this instanceof Boolean;
                return {};
            },
            enumerable: true
        });

        Object.defineProperties(obj, props);
        return result;
    }
runTestCase(testcase);
