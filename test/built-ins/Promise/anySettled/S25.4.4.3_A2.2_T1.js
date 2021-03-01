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

var nonIterable = 3;

Promise.anySettled(nonIterable).then(function() {
  $ERROR('Promise unexpectedly fulfilled: Promise.anySettled(nonIterable) should throw TypeError');
}, function(err) {
  if (!(err instanceof TypeError)) {
    $ERROR('Expected TypeError, got ' + err);
  }
}).then($DONE, $DONE);
