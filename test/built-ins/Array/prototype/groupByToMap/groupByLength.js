// Copyright (c) 2021 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-array.prototype.groupByToMap
description: Array.prototype.groupByToMap populates Map with correct keys and values
info: |
  22.1.3.15 Array.prototype.groupByToMap ( callbackfn [ , thisArg ] )

  ...

  8. For each Record { [[Key]], [[Elements]] } g of groups, do

    a. Let elements be ! CreateArrayFromList(g.[[Elements]]).
    b. Let entry be the Record { [[Key]]: g.[[Key]], [[Value]]: elements }.
    c. Append entry as the last element of map.[[MapData]].

  ...

---*/

const arr = ['test', 'hello', 'world'];

const map = arr.groupByToMap(i=>i.length);

assert.sameValue(map.get(4)[0], 'test');
assert.sameValue(map.get(5)[0], 'hello');
assert.sameValue(map.get(5)[1], 'world')
