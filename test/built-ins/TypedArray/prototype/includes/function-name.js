// Copyright (C) 2014 Domenic Denicola. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
description: >
    %TypedArray%.prototype.includes should have name property with value 'includes'
author: Domenic Denicola
---*/

assert.sameValue(Uint8Array.prototype.includes.name, 'includes',
    'Expected %TypedArray%.prototype.includes.name to be \'includes\'');
