// Copyright 2014 Cubane Canada, Inc.  All rights reserved.
// See LICENSE for details.

/*---
info: >
    Promise.all expects an iterable argument; 
    rejects if IteratorStep() throws
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
