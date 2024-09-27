// Copyright (C) 2024 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
includes:
- non262-Tuple-shell.js
- non262-shell.js
- shell.js
flags:
- noStrict
features:
- Tuple
description: |
  pending
esid: pending
---*/let vals = [[null, "null"],
            [{}, "{}"],
            ['string', "\'string\'"],
            [true, "true"],
            [42, "42"],
            [Symbol('1'), "Symbol(\'1\')"]];

for (p of vals) {
    let mapfn = p[0];
    assertThrowsInstanceOf(() => Tuple.from([], mapfn),
                           TypeError, 'Tuple.from([],' + p[1] + ' should throw');
}

