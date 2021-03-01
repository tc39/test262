// Copyright 2014 Cubane Canada, Inc.  All rights reserved.
// See LICENSE for details.

/*---
esid: sec-promise-anysettled
author: Sam Mikes
description: Promise.anySettled([1]) settles immediately
includes: [promiseHelper.js]
flags: [async]
features: [Promise.anySettled]
---*/

var sequence = [];

var p = Promise.anySettled([1]);

sequence.push(1);

p.then(function() {
  sequence.push(4);
  assert.sameValue(sequence.length, 4);
  checkSequence(sequence, "This happens second");
}).catch($DONE);

Promise.resolve().then(function() {
  sequence.push(3);
  assert.sameValue(sequence.length, 3);
  checkSequence(sequence, "This happens first");
}).then(function() {
  sequence.push(5);
  assert.sameValue(sequence.length, 5);
  checkSequence(sequence, "This happens third");
}).then($DONE, $DONE);

sequence.push(2);
