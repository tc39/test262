// Copyright (C) 2024 Kevin Gibbons. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-uint8array.fromhexinto
description: Uint8Array.fromHexInto ignores its receiver
includes: [compareArray.js]
features: [uint8array-base64]
---*/

var fromHexInto = Uint8Array.fromHexInto;
var target = new Uint8Array([255, 255, 255]);

var result = fromHexInto("aa", target);
assert.sameValue(result.read, 2);
assert.sameValue(result.written, 1);
assert.compareArray(target, [170, 255, 255]);
