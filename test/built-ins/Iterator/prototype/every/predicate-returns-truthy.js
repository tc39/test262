// Copyright (C) 2020 Rick Waldron. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-iteratorprototype.every
description: >
  Iterator.prototype.every returns true when the predicate returns truthy for all iterated values
info: |
  %Iterator.prototype%.every ( predicate )

  4.b. If next is false, return true.

includes: [iterators.js]
features: [iterator-helpers]
flags: []
---*/
let iterator = new Test262Iterator([0, 1, 2, 3, 4]);

let result = iterator.every(() => true);
assert.sameValue(result, true, 'The value of `result` is true');
