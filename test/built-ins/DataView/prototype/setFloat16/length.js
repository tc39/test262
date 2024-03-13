// Copyright (C) 2024 Kevin Gibbons. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-dataview.prototype.setfloat16
description: >
  DataView.prototype.setFloat16.length is 2.
features: [Float16Array]
includes: [propertyHelper.js]
---*/

assert.sameValue(DataView.prototype.setFloat16.length, 2);

verifyNotEnumerable(DataView.prototype.setFloat16, "length");
verifyNotWritable(DataView.prototype.setFloat16, "length");
verifyConfigurable(DataView.prototype.setFloat16, "length");
