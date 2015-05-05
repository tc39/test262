// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: >
    WeakMap Constructor call() as Function using WeakMap.prototype as
    thisArg
includes: [runTestCase.js]
---*/

function testcase() {
    try{
        var map = WeakMap.call(WeakMap.prototype);
    }catch(e){
        return (e instanceof TypeError);
    }
    return false;
};
runTestCase(testcase);
