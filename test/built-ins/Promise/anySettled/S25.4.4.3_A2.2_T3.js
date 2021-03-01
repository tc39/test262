// Copyright 2014 Cubane Canada, Inc.  All rights reserved.
// See LICENSE for details.

/*---
info: |
    Promise.anySettled rejects when GetIterator() returns an abrupt completion
    4. Let iterator be GetIterator(iterable).
    5. IfAbruptRejectPromise(iterator, promiseCapability)
esid: sec-promise-anysettled
author: Sam Mikes
description: Promise.anySettled rejects if GetIterator throws
features: [Symbol.iterator]
flags: [async]
features: [Promise.anySettled]
---*/

var iterThrows = {};
Object.defineProperty(iterThrows, Symbol.iterator, {
  get: function() {
    throw new Error("abrupt completion");
  }
});

Promise.anySettled(iterThrows).then(function() {
  $ERROR('Promise unexpectedly fulfilled: Promise.anySettled(iterThrows) should throw');
}, function(err) {
  if (!(err instanceof Error)) {
    $ERROR('Expected Promise to be rejected with an error, got ' + err);
  }
}).then($DONE, $DONE);
