// Copyright (C) 2023 Ron Buckton. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-runtime-semantics-classdefinitionevaluation
description: >
    The metadata object is a regular, extensible JS object.
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
features: [decorators, decorator-metadata]
---*/

function dec() {}

let C = @dec class C {};
const metadata = C[Symbol.metadata];
assert(Object.isExtensible(metadata));
