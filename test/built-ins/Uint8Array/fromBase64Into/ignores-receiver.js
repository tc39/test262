// Copyright (C) 2024 Kevin Gibbons. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-uint8array.frombase64into
description: Uint8Array.fromBase64Into ignores its receiver
includes: [compareArray.js]
features: [uint8array-base64]
---*/

var fromBase64Into = Uint8Array.fromBase64Into;
var target = new Uint8Array([255, 255, 255]);

var result = fromBase64Into("Zg==", target);
assert.sameValue(result.read, 4);
assert.sameValue(result.written, 1);
assert.compareArray(target, [102, 255, 255]);
