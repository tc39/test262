// Copyright 2014 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
info: Promise.all is resolved with a new empty array
es5id: 25.4.4.1_A2.3_T2
author: Sam Mikes
---*/

var arg = [];

Promise.all(arg).then(function (result) {
    if(result.length !== 0) {
        $ERROR("expected an empty array from Promise.all([]), got " + result);
    }
}).then($DONE,$DONE);
