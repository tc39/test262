// Copyright (C) 2020 Rick Waldron. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-iteratorprototype.find
description: >
  Iterator.prototype.find is callable, but not constructable.
features: [iterator-helpers]
flags: []
---*/
function* g() {}
let iter = g();

Iterator.prototype.find.call(iter, () => {});

iter = g();
iter.find(() => {});

iter = g();
assert.throws(TypeError, function () {
  new iter.find(() => {});
});

