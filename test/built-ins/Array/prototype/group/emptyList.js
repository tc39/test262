// Copyright (c) 2021 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-array.prototype.group
description: Array.prototype.group populates object with correct keys and values
info: |
  22.1.3.14 Array.prototype.group ( callbackfn [ , thisArg ] )

  ...

  8. For each Record { [[Key]], [[Elements]] } g of groups, do

    a. Let elements be ! CreateArrayFromList(g.[[Elements]]).
    b. Perform ! CreateDataPropertyOrThrow(obj, g.[[Key]], elements).

  ...
features: [Array.prototype.group]
---*/

const original = [];

const obj = original.group(() => {
  throw new Test262Error('callback function should not be called')
});

assert.notSameValue(original, obj, 'group returns a object');
assert.sameValue(Object.keys(obj).length, 0);
