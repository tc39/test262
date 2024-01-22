// Copyright (C) 2024 Kevin Gibbons. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-uint8array.fromhexinto
description: Uint8Array.fromHexInto does not write to or error on detatched buffers
includes: [detachArrayBuffer.js]
features: [uint8array-base64]
---*/

var target = new Uint8Array([255, 255, 255]);
$DETACHBUFFER(target.buffer);
var result = Uint8Array.fromHexInto('aa', target);
assert.sameValue(result.read, 0);
assert.sameValue(result.written, 0);
