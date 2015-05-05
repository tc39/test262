// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: >
    WeakMap Constructor as Function verfy whether result in instance
    of WeakMap
includes: [runTestCase.js]
---*/

function testcase() {
    try{
        var map2 = WeakMap.call(undefined);
    }catch(e){
        return (e instanceof TypeError);
    }
    return false;
};
runTestCase(testcase);
