// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.1.1.3-1
description: undefined is not writable, should not throw in non-strict mode
flags: [noStrict]
includes: [runTestCase.js]
---*/

function testcase(){
    undefined = 5;
    if(typeof undefined !== "undefined") return false;

    var nosuchproperty;
    if(nosuchproperty !== undefined) return false;
    
    return true;
}

runTestCase(testcase);
