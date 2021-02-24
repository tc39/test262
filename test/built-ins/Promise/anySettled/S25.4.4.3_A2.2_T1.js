// Copyright 2014 Cubane Canada, Inc.  All rights reserved.
// See LICENSE for details.

/*---
info: Promise.anySettled rejects on non-iterable argument
es6id: S25.4.4.3_A2.2_T1
author: Sam Mikes
description: Promise.anySettled rejects if argument is not object or is non-iterable
flags: [async]
---*/

var nonIterable = 3;

Promise.anySettled(nonIterable).then(function() {
  $ERROR('Promise unexpectedly fulfilled: Promise.anySettled(nonIterable) should throw TypeError');
}, function(err) {
  if (!(err instanceof TypeError)) {
    $ERROR('Expected TypeError, got ' + err);
  }
}).then($DONE, $DONE);
