// Copyright 2014 Cubane Canada, Inc.  All rights reserved.
// See LICENSE for details.

/*---
info: Promise.anySettled rejects on non-iterable argument
esid: sec-promise-anysettled
author: Sam Mikes
description: Promise.anySettled rejects if argument is not object or is non-iterable
flags: [async]
features: [Promise.anySettled]
---*/

Promise.anySettled(new Error("abrupt")).then(function() {
  $ERROR('Promise unexpectedly resolved: Promise.anySettled(abruptCompletion) should throw TypeError');
}, function(err) {
  if (!(err instanceof TypeError)) {
    $ERROR('Expected TypeError, got ' + err);
  }
}).then($DONE, $DONE);
