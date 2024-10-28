// Copyright (C) 2024 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-modulenamespacecreate
description: >
  `defer` is a valid name for default imports
info: |
  ModuleNamespaceCreate ( _module_, _exports_, _phase_ )
    1. Let _internalSlotsList_ be the internal slots listed in <emu-xref href="#table-internal-slots-of-module-namespace-exotic-objects"></emu-xref>.
    1. Let _M_ be MakeBasicObject(_internalSlotsList_).
    1. Set _M_'s essential internal methods to the definitions specified in <emu-xref href="#sec-module-namespace-exotic-objects"></emu-xref>.
    1. ...

  [[GetPrototypeOf]] ( )
    1. Return null.

  [[IsExtensible]] ( )
    1. Return false.

flags: [module]
features: [import-defer]
includes: [propertyHelper.js, deepEqual.js]
---*/

import defer * as ns from "./dep_FIXTURE.js";

assert(typeof ns === "object", "Deferred namespaces are objects");

assert(Reflect.isExtensible(ns) === false, "Deferred namespaces are not extensible");
assert(Reflect.preventExtensions(ns) === true, "Deferred namespaces can made non-extensible");

assert(Reflect.getPrototypeOf(ns) === null, "Deferred namespaces have a null prototype");
assert(Reflect.setPrototypeOf(ns, {}) === false, "Deferred namespaces' prototype cannot be changed");
assert(Reflect.setPrototypeOf(ns, null) === true, "Deferred namespaces' prototype can be 'set' to null");

assert.throws(TypeError, () => Reflect.apply(ns, null, []), "Deferred namespaces are not callable");
assert.throws(TypeError, () => Reflect.construct(ns, null, []), "Deferred namespaces are not constructable");

assert.deepEqual(
  Reflect.ownKeys(ns),
  ["bar", "foo", Symbol.toStringTag],
  "Deferred namespaces' keys are the exports sorted alphabetically, followed by @@toStringTag"
);

verifyProperty(ns, "foo", {
  value: 1,
  writable: true,
  enumerable: true,
  configurable: false,
});
assert(Reflect.getOwnPropertyDescriptor(ns, "non-existent") === undefined, "No descriptors for non-exports");
