// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: Testing Symbol are accessible with getOwnPropertySymbols
includes: [runTestCase.js]
---*/

function testcase() {
    var obj = new Object();
    var sym = Symbol(1);
    obj[sym] = 'test';
    for (var i in obj) {
        $ERROR('Symbols are non-enumerable in for-in');
    }
    if (Object.getOwnPropertyNames(obj).indexOf(sym) >= 0) {
        $ERROR("Symbols don't show up as property names");
    }
    if (Object.keys(obj).indexOf(sym) >= 0) {
        $ERROR("Symbols are non-enumerable in Object.keys");
    }
    return true;

}
runTestCase(testcase);
