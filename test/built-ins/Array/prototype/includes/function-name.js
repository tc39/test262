// Copyright (C) 2014 Domenic Denicola. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
description: Array.prototype.includes should have name property with value 'includes'
author: Domenic Denicola
---*/

assert.sameValue(Array.prototype.includes.name, 'includes',
    'Expected Array.prototype.includes.name to be \'includes\'');
