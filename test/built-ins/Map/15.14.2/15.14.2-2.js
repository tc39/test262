// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: Map Constructor as Function verfy whether result in instance of Map
includes: [runTestCase.js]
---*/

function testcase() {
    try{
        var map2 = Map.call(undefined);
    }catch(e){
        return (e instanceof TypeError);
    }
};
runTestCase(testcase);
