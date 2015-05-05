// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: Set Constructor as Function verfy whether result in instance of Set
includes: [runTestCase.js]
---*/

function testcase() {
    try{
        Set.call(undefined);
    }catch(e){
        return (e instanceof TypeError);
    }
    return false;
};
runTestCase(testcase);
