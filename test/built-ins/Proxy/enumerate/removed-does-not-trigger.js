// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-proxy-object-internal-methods-and-internal-slots
description: >
  Enumerate trap was removed and it should not be triggered anymore.
includes: [compareArray.js]
features: [Proxy, Symbol, Symbol.iterator]
---*/

var x;
var target = [1, 2, 3];
var p = new Proxy(target, {
  enumerate: function() {
    throw new Test262Error(
      "An enumerate property on handler object shouldn't trigger a Proxy trap"
    );
  }
});

var forInResults = [];
for (x in p) {
  forInResults.push(x);
}

assert.compareArray(forInResults, ["0", "1", "2"], 'The value of forInResults is expected to be ["0", "1", "2"]');

var forOfResults = [];
for (x of p) {
  forOfResults.push(x);
}

assert.compareArray(forOfResults, [1, 2, 3], 'The value of forOfResults is expected to be [1, 2, 3]');

var itor = p[Symbol.iterator]();
var next = itor.next();
assert.sameValue(next.value, 1, 'The value of next.value is expected to be 1');
assert.sameValue(next.done, false, 'The value of next.done is expected to be false');
next = itor.next();
assert.sameValue(next.value, 2, 'The value of next.value is expected to be 2');
assert.sameValue(next.done, false, 'The value of next.done is expected to be false');
next = itor.next();
assert.sameValue(next.value, 3, 'The value of next.value is expected to be 3');
assert.sameValue(next.done, false, 'The value of next.done is expected to be false');
next = itor.next();
assert.sameValue(next.value, undefined, 'The value of next.value is expected to equal undefined');
assert.sameValue(next.done, true, 'The value of next.done is expected to be true');
