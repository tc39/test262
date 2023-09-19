// Copyright (C) 2014 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
es6id: 9.4.4.6 S7
description: >
    Unmapped arguments exotic objects should implement the Array iterator
    protocol.
includes: [propertyHelper.js]
flags: [noStrict]
features: [Symbol.iterator]
---*/

(function() {
  'use strict';

  verifyProperty(arguments, Symbol.iterator, {
    value: [][Symbol.iterator],
    writable: true,
    enumerable: false,
    configurable: true,
  });
}());
