// Copyright (C) 2023 Igalia, S. L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-asynccontext-variable-constructor
description: The AsyncContext.Variable constructor implements [[Construct]]
includes: [isConstructor.js]
features: [AsyncContext, Reflect.construct]
---*/

assert.sameValue(isConstructor(AsyncContext.Variable), true, 'isConstructor(AsyncContext.Variable) must return true');
new AsyncContext.Variable();
