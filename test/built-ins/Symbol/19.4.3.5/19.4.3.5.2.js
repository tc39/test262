// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: Symbol.prototype[@@toStringTag] has the attributes { [[Writable]]:false, [[Enumerable]]:false, [[Configurable]]:true }.
---*/

var desc = Object.getOwnPropertyDescriptor(Symbol.prototype, Symbol.toStringTag);

if (desc.writable !== false || desc.enumerable !== false || desc.configurable !== true) {
    $ERROR("desc.writable !== false || desc.enumerable !== false || desc.configurable !== true");
}
