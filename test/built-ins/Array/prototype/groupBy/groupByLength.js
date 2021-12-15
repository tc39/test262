// Copyright (c) 2021 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-array.prototype.groupBy
description: Array.prototype.groupBy populates Map with correct keys and values
info: |
  22.1.3.14 Array.prototype.groupBy ( callbackfn [ , thisArg ] )

  ...

  8. For each Record { [[Key]], [[Elements]] } g of groups, do

    a. Let elements be ! CreateArrayFromList(g.[[Elements]]).
    b. Perform ! CreateDataPropertyOrThrow(obj, g.[[Key]], elements).

  ...

---*/

const arr = ['test', 'hello', 'world'];

const obj = arr.groupBy(i=>i.length);

assert.sameValue(obj["4"][0], 'test');
assert.sameValue(obj["5"][0], 'hello');
assert.sameValue(obj["5"][1], 'world')
