// Copyright (C) 2025 Ecma International. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-import-call-runtime-semantics-evaluation
description: >
  A ModuleSource whose source text imports a non-existent module:
  import(moduleSource) rejects with an error during linking.
info: |
  When a ModuleSource contains an import declaration that references a module
  specifier that cannot be resolved, dynamically importing it must reject.
  The error occurs during the linking phase when the host fails to resolve the
  specifier.
features: [source-phase-imports, esm-phase-imports]
flags: [module, async]
includes: [asyncHelpers.js]
---*/

assert.sameValue(typeof $262.createModuleSource, 'function');

var baseId = import.meta.moduleId.slice(0, import.meta.moduleId.lastIndexOf('/') + 1);

var src = $262.createModuleSource(
  'import { foo } from "nonexistent-module";',
  baseId + 'linking-error'
);

asyncTest(async function () {
  try {
    await import(src);
    throw new Test262Error('import of a ModuleSource with an unresolvable dependency should have rejected');
  } catch (e) {
    if (e instanceof Test262Error) throw e;
    // The error type during linking is host-defined, but the import must reject.
    // It should not be a SyntaxError (the source text itself is syntactically valid).
    if (e instanceof SyntaxError) {
      throw new Test262Error('Expected a linking error, not a SyntaxError');
    }
  }
});
