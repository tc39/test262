// Copyright (C) 2024 Kevin Gibbons. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-dataview.prototype.setfloat16
description: >
  DataView.prototype.setFloat16.name is "setFloat16".
features: [Float16Array]
includes: [propertyHelper.js]
---*/

assert.sameValue(DataView.prototype.setFloat16.name, "setFloat16");

verifyNotEnumerable(DataView.prototype.setFloat16, "name");
verifyNotWritable(DataView.prototype.setFloat16, "name");
verifyConfigurable(DataView.prototype.setFloat16, "name");
