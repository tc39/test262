// Copyright (C) 2017 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
description: >
    `dotAll` accessor function invoked on a RegExp instance
esid: pending
info: >
    21.2.5.12 get RegExp.prototype.dotAll

    4. Let flags be the value of R’s [[OriginalFlags]] internal slot.
    5. If flags contains the code unit "s", return true.
    6. Return false.
features: [regexp-dotall]
---*/

assert.sameValue(/./.dotAll, false);
assert.sameValue(/./i.dotAll, false);
assert.sameValue(/./g.dotAll, false);
assert.sameValue(/./y.dotAll, false);
assert.sameValue(/./m.dotAll, false);

assert.sameValue(/./s.dotAll, true);
assert.sameValue(/./is.dotAll, true);
assert.sameValue(/./sg.dotAll, true);
assert.sameValue(/./is.dotAll, true);
assert.sameValue(/./ms.dotAll, true);

assert.sameValue(new RegExp(".", "").dotAll, false);
assert.sameValue(new RegExp(".", "i").dotAll, false);
assert.sameValue(new RegExp(".", "g").dotAll, false);
assert.sameValue(new RegExp(".", "y").dotAll, false);
assert.sameValue(new RegExp(".", "m").dotAll, false);

assert.sameValue(new RegExp(".", "s").dotAll, true);
assert.sameValue(new RegExp(".", "is").dotAll, true);
assert.sameValue(new RegExp(".", "sg").dotAll, true);
assert.sameValue(new RegExp(".", "is").dotAll, true);
assert.sameValue(new RegExp(".", "ms").dotAll, true);
