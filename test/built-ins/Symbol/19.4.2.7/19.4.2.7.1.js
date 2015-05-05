// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: Symbol.prototype has the attributes { [[Writable]]:false, [[Enumerable]]:false, [[Configurable]]:false }.
---*/

var desc = Object.getOwnPropertyDescriptor(Symbol, 'prototype');

if (desc.writable !== false || desc.enumerable !== false || desc.configurable !== false) {
    $ERROR("desc.writable !== false || desc.enumerable !== false || desc.configurable !== true");
}
