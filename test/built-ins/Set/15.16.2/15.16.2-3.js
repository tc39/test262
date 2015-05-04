// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: Set Constructor call() as Function using Map.prototype as thisArg
includes: [runTestCase.js]
---*/

function testcase() {
    try{
        var map = Set.call(Set.prototype);
    }catch(e){
        return (e instanceof TypeError);
    }
    return false;
};
runTestCase(testcase);
