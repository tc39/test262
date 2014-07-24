// Copyright 2014 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
info: Promise.all([]) is resolved immediately
es5id: 25.4.4.1_A2.2_T1
author: Sam Mikes
includes: [PromiseHelper.js]
---*/

var sequence = [];

Promise.all([]).then(function () {
    sequence.push(1);
}).catch($DONE);

Promise.resolve().then(function() {
    sequence.push(2);
}).then(function () {
    sequence.push(3);
    checkSequence(sequence, "Promises resolved in unexpected sequence");
}).then($DONE,$DONE);
