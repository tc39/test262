// Copyright 2014 Cubane Canada, Inc.  All rights reserved.
// See LICENSE for details.

/*---
info: >
    Promise.all expects an iterable argument;
    rejects if IteratorStep() throws
es6id: S25.4.4.1_A5.1_T1
author: Sam Mikes
description: iterator.next throws, causing Promise.all to reject
---*/

var iterThrows = {};
Object.defineProperty(iterThrows, Symbol.iterator, {
    get: function () {
        return {
            next: function () {
                throw new Error("abrupt completion");
            }
        };
    }
});

Promise.all(iterThrows).then(function () {
    $ERROR('Promise unexpectedly resolved: Promise.all(iterThrows) should throw TypeError');
},function (err) {
    if (!(err instanceof TypeError)) {
        $ERROR('Expected TypeError, got ' + err);
    }
}).then($DONE,$DONE);
