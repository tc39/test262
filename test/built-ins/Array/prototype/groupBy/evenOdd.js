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

const array = [1,2,3];

const obj = array.groupBy(i=>{return i%2===0?'even':'odd';});

assert.sameValue(obj['even'][0], 2);
assert.sameValue(obj['odd'][0], 1);
assert.sameValue(obj['odd'][1], 3);
