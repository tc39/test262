// Copyright (c) 2023 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-map.groupby
description: Map.groupBy works for string items
info: |
  Map.groupBy ( items, callbackfn )
  ...
includes: [compareArray.js]
features: [array-grouping, Map]
---*/

const string = 'abcd';

const map = Map.groupBy(string, function (char) {
  return char < 'c' ? 'before' : 'after';
});

assert.compareArray(Array.from(map.keys()), ['before', 'after']);
assert.compareArray(map.get('before'), ['a', 'b']);
assert.compareArray(map.get('odd'), ['c', 'd']);
