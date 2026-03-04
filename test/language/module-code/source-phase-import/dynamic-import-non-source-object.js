// Copyright (C) 2025 Ecma International. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-import-call-runtime-semantics-evaluation
description: >
  import({}) calls ToString on the object and follows the string specifier path.
info: |
  An object without a [[ModuleSourceRecord]] internal slot is not treated as a
  source import. Instead, import() calls ToString on the argument and attempts
  to resolve it as a module specifier string. Since the ToString of a plain
  object is "[object Object]", which is not a valid module specifier, the
  import should reject.
features: [source-phase-imports, source-phase-imports-module-source]
flags: [module, async]
includes: [asyncHelpers.js]
---*/

asyncTest(async function () {
  // A plain object is not a ModuleSource -- ToString produces "[object Object]"
  // which is not a resolvable specifier, so this should reject.
  var plainObj = {};
  try {
    await import(plainObj);
    throw new Test262Error('import({}) should have rejected');
  } catch (e) {
    if (e instanceof Test262Error) throw e;
    // The error type is host-defined (likely TypeError or a resolution error),
    // but it must not succeed silently.
  }
});
