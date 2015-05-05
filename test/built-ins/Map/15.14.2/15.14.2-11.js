// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: >
    Map Constructor as Function verfy whether result in instance of
    Map in Strict Mode
includes: [runTestCase.js]
---*/

function testcase() {
    "use strict";
    try{
        var map = Map();
    }catch(e){
        return e instanceof TypeError;
    }
    return false
};
runTestCase(testcase);
