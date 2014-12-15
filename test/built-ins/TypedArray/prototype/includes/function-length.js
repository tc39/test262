// Copyright (C) 2014 Domenic Denicola. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
description: >
    %TypedArray%.prototype.includes should have length 1
author: Domenic Denicola
---*/

assert.sameValue(Uint8Array.prototype.includes.length, 1, 'Expected %TypedArray%.prototype.includes.length to be 1');
