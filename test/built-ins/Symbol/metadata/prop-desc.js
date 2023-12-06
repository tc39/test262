// Copyright (C) 2023 Ron Buckton. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-symbol.metadata
description: >
    `Symbol.metadata` property descriptor
info: |
    This property has the attributes { [[Writable]]: false, [[Enumerable]]:
    false, [[Configurable]]: false }.
includes: [propertyHelper.js]
features: [decorator-metadata]
---*/

assert.sameValue(typeof Symbol.metadata, 'symbol');
verifyNotEnumerable(Symbol, 'metadata');
verifyNotWritable(Symbol, 'metadata');
verifyNotConfigurable(Symbol, 'metadata');
