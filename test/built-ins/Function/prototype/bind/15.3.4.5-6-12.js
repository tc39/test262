// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.3.4.5-6-12
description: Function.prototype.bind - F cannot get property which doesn't exist
includes: [runTestCase.js]
---*/

function testcase() {

        var foo = function () { };

        var obj = foo.bind({});
        return typeof (obj.property) === "undefined";
    }
runTestCase(testcase);
