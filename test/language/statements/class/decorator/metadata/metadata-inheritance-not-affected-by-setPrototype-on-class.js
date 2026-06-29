// Copyright (C) 2023 Ron Buckton. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-runtime-semantics-classdefinitionevaluation
description: >
    Metadata on a derived class inherits from the metadata of the declared super class.
info: |
    ClassTail : ClassHeritage_opt { ClassBody_opt }
    21. Let hasDecorators be false.
    22. If decorators is not empty, set hasDecorators to true.
    [...]
    25. For each ClassElement e of elements, do
      [...]
      e. If element is a ClassElementDefinition Record, then
        i. If e.[[Decorators]] is not empty, set hasDecorators to true.
      [...]
    [...]
    29. Let metadataObj be empty.
    30. If hasDecorators is true, then
      a. If ClassHeritage is present, [...]
      b. Else, let metadataParent be null.
      c. Set metadataObj to OrdinaryObjectCreate(metadataParent).
    [...]
    41. If metadataObj is not empty, then
      a. Let setMetadataResult be Completion(DefinePropertyOrThrow(F, @@metadata, PropertyDescriptor {
        [[Value]]: metadataObj, [[Writable]]: true, [[Enumerable]]: false, [[Configurable]]: true })).
        i. If _setMetadataResult_ is an abrupt completion, then
          1. Set the running execution context's PrivateEnvironment to _outerPrivateEnvironment_.
          2. Return ? _setMetadataResult_.
    [...]
features: [decorators, decorator-metadata]
---*/

function dec() {}

class UndecoratedBase {}

@dec class Base {}
const baseMetadata = Base[Symbol.metadata];

@dec class Derived extends Base { }
Object.setPrototypeOf(Derived, UndecoratedBase);

const derivedMetadata = Derived[Symbol.metadata];
assert.sameValue(Object.getPrototypeOf(derivedMetadata), baseMetadata);
