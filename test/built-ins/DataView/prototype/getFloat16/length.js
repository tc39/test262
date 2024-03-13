// Copyright (C) 2024 Kevin Gibbons. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-dataview.prototype.getfloat16
description: >
  DataView.prototype.getFloat16.length is 1.
features: [Float16Array]
includes: [propertyHelper.js]
---*/

assert.sameValue(DataView.prototype.getFloat16.length, 1);

verifyNotEnumerable(DataView.prototype.getFloat16, "length");
verifyNotWritable(DataView.prototype.getFloat16, "length");
verifyConfigurable(DataView.prototype.getFloat16, "length");
