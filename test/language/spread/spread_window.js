// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: spread host object
includes: [runTestCase.js]
---*/

function testcase() {
    try{
        foo(...this);
    }catch(e){
        return true;
    }

    return false;
};
runTestCase(testcase);
