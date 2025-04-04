// Copyright (C) 2025 Moddable Tech, Inc. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
features: [ArrayBuffer, immutable-arraybuffer]
---*/

var ab = new ArrayBuffer(1);

assert.sameValue(ab.immutable, false);

ab = ab.transferToImmutable();

assert.sameValue(ab.immutable, true);

ab = new ArrayBuffer(1, { maxByteLength: 2 });

assert.sameValue(ab.immutable, false);

ab = ab.transferToImmutable();

assert.sameValue(ab.immutable, true);
