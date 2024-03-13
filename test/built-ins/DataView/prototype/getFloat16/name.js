// Copyright (C) 2024 Kevin Gibbons. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-dataview.prototype.getfloat16
description: >
  DataView.prototype.getFloat16.name is "getFloat16".
features: [Float16Array]
includes: [propertyHelper.js]
---*/

assert.sameValue(DataView.prototype.getFloat16.name, "getFloat16");

verifyNotEnumerable(DataView.prototype.getFloat16, "name");
verifyNotWritable(DataView.prototype.getFloat16, "name");
verifyConfigurable(DataView.prototype.getFloat16, "name");
