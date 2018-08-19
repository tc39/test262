// Copyright (C) 2018 Richard Lawrence. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-array.prototype.flatMap
description: >
    properties are accessed correct number of times by .flatMap
features: [Array.prototype.flat]
includes: [compareArray.js]
---*/


const getCalls = [], hasCalls = [];
const handler = {
  get : function (t, p, r) { getCalls.push(p); return Reflect.get(t, p, r); },
  has : function (t, p, r) { hasCalls.push(p); return Reflect.has(t, p, r); }
}

const tier2 = new Proxy([4, 3], handler);
const tier1 = new Proxy([2, [3, 4, 2, 2], 5, tier2, 6], handler);

Array.prototype.flatMap.call(tier1, function(a){ return a; });

assert.compareArray(getCalls, ["length", "constructor", "0", "1", "2", "3", "length", "0", "1", "4"], 'getProperty by .flatMap should occur exactly once per property and once for length and constructor');
assert.compareArray(hasCalls, ["0", "1", "2", "3", "0", "1", "4"], 'hasProperty by .flatMap should occur exactly once per property');
