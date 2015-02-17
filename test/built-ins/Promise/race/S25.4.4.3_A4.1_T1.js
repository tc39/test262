// Copyright 2014 Cubane Canada, Inc.  All rights reserved.
// See LICENSE for details.

/*---
es6id: S25.4.4.3_A4.1_T1
author: Sam Mikes
description: Promise.race rejects if IteratorStep throws
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

Promise.race(iterThrows).then(function () {
    $ERROR('Promise unexpectedly fulfilled: Promise.race(iterThrows) should throw TypeError');
},function (err) {
    if (!(err instanceof TypeError)) {
        $ERROR('Expected TypeError, got ' + err);
    }
}).then($DONE,$DONE);

