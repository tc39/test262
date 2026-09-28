// Copyright (C) 2023 Igalia, S. L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-asynccontext-object
description: >
    The prototype of AsyncContext is Object.prototype
info: |
    The AsyncContext Object has a [[Prototype]] internal slot whose value is
    %Object.prototype%.
features: [AsyncContext]
---*/

const proto = Object.getPrototypeOf(AsyncContext);

assert.sameValue(proto, Object.prototype);
