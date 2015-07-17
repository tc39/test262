// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.14-9-b-ii-2
description: >
    Array.prototype.indexOf - both type of array element and type of
    search element are Undefined
includes: [runTestCase.js]
---*/

function testcase() {

        return [undefined].indexOf() === 0 && [undefined].indexOf(undefined) === 0;
    }
runTestCase(testcase);
