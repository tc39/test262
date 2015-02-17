// Copyright 2014 Cubane Canada, Inc.  All rights reserved.
// See LICENSE for details.

/*---
info: >
   Promise.resolve
es6id: S25.4.4.5_A3.1_T1
author: Sam Mikes
description: Promise.resolve delegates to foreign thenable
includes: [PromiseHelper.js]
---*/

var sequence = [];

var thenable = {
    then: function(onResolve, onReject) {
        sequence.push(3);
        checkSequence(sequence, "thenable.then called");

        Promise.resolve().then(function () {
            sequence.push(4);
            checkSequence(sequence, "all done");
        }).then($DONE, $DONE);
    }
};

sequence.push(1);
checkSequence(sequence, "no async calls yet");

var p1 = Promise.resolve(thenable);

sequence.push(2);
checkSequence(sequence, "thenable.then queued but not yet called");
