// Copyright (C) 2013 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
description: >
    The GeneratorFunctionPrototype defines an `@@toStringTag` property.
es6id: 25.2.3.3
includes: [propertyHelper.js]
---*/

var GeneratorFunctionPrototype = Object.getPrototypeOf(function*() {});

assert.sameValue(
  GeneratorFunctionPrototype[Symbol.toStringTag], 'GeneratorFunction'
);

verifyNotEnumerable(GeneratorFunctionPrototype, Symbol.toStringTag);
verifyNotWritable(GeneratorFunctionPrototype, Symbol.toStringTag);
verifyConfigurable(GeneratorFunctionPrototype, Symbol.toStringTag);
