// Copyright (c) 2021 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-array.prototype.groupToMap
description: Array.prototype.groupToMap returns a null prototype object
info: |
  22.1.3.15 Array.prototype.groupToMap ( callbackfn [ , thisArg ] )

  ...

  7. Let map be ! Construct(%Map%).
  ...
  9. Return map.

  ...
features: [Array.prototype.group]
---*/

const array = [1, 2, 3];

const map = array.groupToMap(i => {
  return i % 2 === 0 ? 'even' : 'odd';
});

assert.sameValue(map instanceof Map, true);
