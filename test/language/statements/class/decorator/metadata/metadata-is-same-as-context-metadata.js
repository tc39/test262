// Copyright (C) 2023 Ron Buckton. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-runtime-semantics-classdefinitionevaluation
description: >
    The metadata object provided to a decorator is the same one installed on the class.
info: |
    CreateDecoratorContextObject ( kind, name, initializers, decorationState, metadataObj [ , isStatic ] )

    [...]
    13. Perform ! CreateDataPropertyOrThrow(contextObj, "metadata", metadata).
    14. Return contextObj.

    ClassDefinitionEvaluation
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

var contextObj;
function dec(_, context) {
  contextObj = context;
}

@dec class C {}
assert.sameValue(C[Symbol.metadata], contextObj.metadata);
