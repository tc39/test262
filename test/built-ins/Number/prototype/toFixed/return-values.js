// Copyright (C) 2016 The V8 Project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es6id: 20.1.3.3
esid: sec-number.prototype.tofixed
description: >
  Return regular string values
---*/

// a bug in IE ? - Edge 14
assert.sameValue((1.255).toFixed(2), "1.25");
