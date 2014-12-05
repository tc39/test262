// Copyright 2014 Cubane Canada, Inc.  All rights reserved.
// See LICENSE for details.

/*---
info: >
    Promise.all expects an iterable argument; 
    fails if recieves an abrupt completion
    ref 7.4.1 non-Object fails CheckIterable
    ref 7.4.2 GetIterator throws TypeError if CheckIterable fails
author: Sam Mikes
description: Promise.all(new Error()) returns Promise rejected with TypeError
---*/

Promise.all(new Error("abrupt")).then(function () {
    $ERROR('Promise unexpectedly resolved: Promise.all(abruptCompletion) should throw TypeError');
},function (err) {
    if (!(err instanceof TypeError)) {
        $ERROR('Expected TypeError, got ' + err);
    }
}).then($DONE,$DONE);
