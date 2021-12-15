// Copyright (c) 2021 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-array.prototype.groupBy
description: Array.prototype.groupBy applied to undefined throws a TypeError
info: |
  22.1.3.14 Array.prototype.groupBy ( callbackfn [ , thisArg ] )

  ...

  3. If IsCallable(callbackfn) is false, throw a TypeError exception.

  ...

---*/


assert.throws(TypeError, function() {
  Array.prototype.groupBy.call(undefined);
});
