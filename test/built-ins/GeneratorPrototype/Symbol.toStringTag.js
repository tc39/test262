// Copyright (C) 2013 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
description: >
    The Generator prototype defines a `@@toStringTag` attribute.
es6id: 25.3.1.5
includes: [propertyHelper.js]
---*/

var GeneratorPrototype = Object.getPrototypeOf(
  Object.getPrototypeOf(function*() {}())
);

assert.sameValue(GeneratorPrototype[Symbol.toStringTag], 'Generator');

verifyNotEnumerable(GeneratorPrototype, Symbol.toStringTag);
verifyNotWritable(GeneratorPrototype, Symbol.toStringTag);
verifyConfigurable(GeneratorPrototype, Symbol.toStringTag);
