// Copyright (C) 2025 Ecma International. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-modulesourcesequal
description: >
  The same ModuleSource used in two import() calls produces the same namespace.
info: |
  ModuleSourcesEqual ( left, right )

  1. Assert: left.[[ModuleSource]] is not ~empty~.
  2. Assert: right.[[ModuleSource]] is not ~empty~.
  3. If left.[[ModuleSource]] is not right.[[ModuleSource]], return *false*.
  4. Return *true*.

  When the same ModuleSource object is used in two import() calls, the
  underlying Module Source Records share the same [[ModuleSource]] object,
  so ModuleSourcesEqual returns true. The host invariant then requires
  both calls to resolve to the same Module Record and thus the same namespace.
features: [source-phase-imports, esm-phase-imports]
flags: [module, async]
includes: [asyncHelpers.js]
---*/

assert.sameValue(typeof $262.createModuleSource, 'function');

var baseId = import.meta.moduleId.slice(0, import.meta.moduleId.lastIndexOf('/') + 1);

var src = $262.createModuleSource('export var x = 1;', baseId + 'mse-same');

asyncTest(async function () {
  var ns1 = await import(src);
  var ns2 = await import(src);
  assert.sameValue(ns1, ns2,
    'Same ModuleSource identity should produce the same namespace (ModuleRequestsEqual is true)');
});
