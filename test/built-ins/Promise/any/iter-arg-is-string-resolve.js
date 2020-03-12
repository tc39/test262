// Copyright (C) 2019 Sergey Rubanov. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-promise.any
description: >
  Resolve when argument is a string
info: |
  Promise.any ( iterable )

  ...
  4. Let iteratorRecord be GetIterator(iterable).
  5. IfAbruptRejectPromise(iteratorRecord, promiseCapability).
  ...

  #sec-getiterator
  GetIterator ( obj [ , hint [ , method ] ] )

  ...
  Let iterator be ? Call(method, obj).
  If Type(iterator) is not Object, throw a TypeError exception.
  ...
features: [Promise.any, Symbol.iterator]
flags: [async]
---*/

try {
  Promise.any('').then(function(v) {
    assert.sameValue(v.length, 0);
  }, function(error) {
    $DONE(`The promise should be resolved, but was rejected with error: ${error.message}`);
  }).then($DONE, $DONE);
} catch (error) {
  $DONE(`The promise should be resolved, but threw an exception: ${error.message}`);
}
