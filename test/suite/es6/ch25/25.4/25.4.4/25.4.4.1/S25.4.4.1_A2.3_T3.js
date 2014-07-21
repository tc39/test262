// Copyright 2014 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
info: Promise.all is resolved with a new empty array
author: Sam Mikes
---*/

var arg = [];

Promise.all(arg).then(function (result) {
    if(result === arg) {
        $ERROR("expected a new array from Promise.all but argument was re-used");
    }
}).then($DONE,$DONE);
