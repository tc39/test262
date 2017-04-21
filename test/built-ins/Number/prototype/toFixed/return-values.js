// Copyright (C) 2016 Anonymous Contributor. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es6id: 20.1.3.3
esid: sec-number.prototype.tofixed
description: >
  Return regular string values
---*/

assert.sameValue((1.25499999999999989342).toFixed(2), "1.25");
