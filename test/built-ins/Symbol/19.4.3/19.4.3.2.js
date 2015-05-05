// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: Symbol.prototype has [[Prototype]] internal slot set to Object.prototype
---*/

if (Symbol.prototype.__proto__ !== Object.prototype) {
    $ERROR("Symbol.prototype.__proto__ !== Object.prototype");
}
