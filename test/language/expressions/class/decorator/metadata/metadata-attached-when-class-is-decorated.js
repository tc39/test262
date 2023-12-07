// Copyright (C) 2023 Ron Buckton. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-runtime-semantics-classdefinitionevaluation
description: >
    Metadata is only attached when a class or class element is decorated.
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

let C1 = @dec class C1 {};
assert.sameValue(typeof C1[Symbol.metadata], "object");
assert.notSameValue(C1[Symbol.metadata], null);

let C2 = class C2 { @dec method() {} };
assert.sameValue(typeof C2[Symbol.metadata], "object");
assert.notSameValue(C2[Symbol.metadata], null);

let C3 = class C3 {};
assert.sameValue(C3[Symbol.metadata], null); // inherited from Function.prototype[Symbol.metadata]
