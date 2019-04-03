// Copyright (C) 2019 Leo Balter. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
description: Resolving with a non-thenable object value
esid: sec-promise.allsettled
info: |
  Promise.allSettled Resolve Element Functions

  14. If remainingElementsCount.[[Value]] is 0, then
    a. Let valuesArray be ! CreateArrayFromList(values).
    b. Return ? Call(promiseCapability.[[Resolve]], undefined, « valuesArray »).
flags: [async]
includes: [compareArray.js]
---*/

var v1 = {};
var v2 = {};
var v3 = {};

Promise.allSettled([v1, v2, v3])
  .then(function(values) {
    assert.sameValue(Array.isArray(values), true, 'Resolved with an Array instance.');
    assert.sameValue(values.length, 3, 'value.length');
    assert.compareArray(Object.keys(values[0]), ['status', 'value']);
    assert.sameValue(values[0].status, 'fulfilled', 'values[0].status');
    assert.sameValue(values[0].value, v1, 'values[0].value');
    assert.sameValue(values[1].status, 'fulfilled', 'values[1].status');
    assert.sameValue(values[1].value, v2, 'values[1].value');
    assert.sameValue(values[2].status, 'fulfilled', 'values[2].status');
    assert.sameValue(values[2].value, v3, 'values[2].value');
  }, function() {
    $DONE('The promise should not be rejected.');
  }).then($DONE, $DONE);
