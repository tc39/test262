// Copyright (C) 2018 Ujjwal Sharma. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-intl.numberformat.prototype-@@tostringtag
description: >
  Initial value of Intl.NumberFormat.prototype[@@toStringTag] is "Object".
---*/

assert.sameValue(Intl.NumberFormat.prototype[Symbol.toStringTag], 'Object');
assert.sameValue(
  Object.prototype.toString.call(new Intl.NumberFormat()),
  '[object Object]'
);
