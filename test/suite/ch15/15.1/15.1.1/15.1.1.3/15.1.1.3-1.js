// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

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
