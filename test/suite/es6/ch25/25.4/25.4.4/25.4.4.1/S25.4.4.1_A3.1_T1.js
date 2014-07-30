// Copyright 2014 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
info: >
    Promise.all expects an iterable argument; 
    ref 7.4.1 non-Object fails CheckIterable
    ref 7.4.2 GetIterator throws TypeError if CheckIterable fails
es5id: 25.4.4.1_A3.1_T1
author: Sam Mikes
---*/

var nonIterable = 3;

Promise.all(nonIterable).then(function () {
    $ERROR('Promise unexpectedly resolved: Promise.all(nonIterable) should throw TypeError');
},function (err) {
    if (!(err instanceof TypeError)) {
        $ERROR('Expected TypeError, got ' + err);
    }
}).then($DONE,$DONE);
