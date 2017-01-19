// Copyright (C) 2017 K. Adam White. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es6id: 20.1.3.3
esid: sec-number.prototype.tofixed
description: >
  Number.prototype.toFixed returns a string value
---*/

assert.sameValue(typeof (123.456).toFixed(), "string");
