// Copyright (C) 2023 Ron Buckton. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-runtime-semantics-classdefinitionevaluation
description: >
    Property descriptor for Symbol.metadata property of decorated class expression.
info: |
    CreateDecoratorContextObject ( kind, name, initializers, decorationState, metadataObj [ , isStatic ] )
    [...]
    41. If metadataObj is not empty, then
      a. Let setMetadataResult be Completion(DefinePropertyOrThrow(F, @@metadata, PropertyDescriptor { [[Value]]: metadataObj, [[Writable]]: true, [[Enumerable]]: false, [[Configurable]]: true })).
          1. If _setMetadataResult_ is an abrupt completion, then
            1. Set the running execution context's PrivateEnvironment to _outerPrivateEnvironment_.
            1. Return ? _setMetadataResult_.
    [...]
includes: [propertyHelper.js]
features: [decorators, decorator-metadata]
---*/

function dec() {}

let C = @dec class C {};
verifyProperty(C, Symbol.metadata, {
  enumerable: false,
  writable: true,
  configurable: true,
});
