// Copyright (c) 2021 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-array.prototype.group
description: Array.prototype.group populates object with correct keys and values
info: |
  22.1.3.14 Array.prototype.group ( callbackfn [ , thisArg ] )

  ...

  6. Repeat, while k < len
    a. Let Pk be ! ToString(𝔽(k)).
    b. Let kValue be ? Get(O, Pk).
    c. Let propertyKey be ? ToPropertyKey(? Call(callbackfn, thisArg, « kValue, 𝔽(k), O »)).
    d. Perform AddValueToKeyedGroup(groups, propertyKey, kValue).

  ...
includes: [compareArray.js]
features: [Array.prototype.group]
---*/

let calls = 0;
const array = [, , ,];

const obj = array.group(() => {
  calls++;
  return 'key';
});

assert.sameValue(calls, 3);

assert.sameValue(0 in obj['key'], true);
assert.sameValue(1 in obj['key'], true);
assert.sameValue(2 in obj['key'], true);
assert.compareArray(obj['key'], [void 0, void 0, void 0]);
