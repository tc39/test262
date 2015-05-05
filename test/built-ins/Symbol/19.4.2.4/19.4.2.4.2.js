// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: Symbol.iterator has the attributes { [[Writable]]:false, [[Enumerable]]:false, [[Configurable]]:false }.
---*/

var desc = Object.getOwnPropertyDescriptor(Symbol, 'iterator');

if (desc.writable !== false || desc.enumerable !== false || desc.configurable !== false) {
    $ERROR("desc.writable !== false || desc.enumerable !== false || desc.configurable !== true");
}
