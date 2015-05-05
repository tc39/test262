// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: The value of the [[Prototype]] internal slot of the Symbol constructor is the intrinsic object %FunctionPrototype%
---*/

try {
    if (Symbol.__proto__ !== Function.prototype) {
        $ERROR("Symbol.__proto__ !== Function.prototype");
    }
} catch (e) {
    $ERROR("No error is expected " + e);
}
