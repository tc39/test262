// Copyright (C) 2025 Ecma International. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-module-source-objects
description: >
  Two ModuleSource objects created from the same source text are not identical.
info: |
  Each call to $262.createModuleSource with a different id returns a new,
  distinct ModuleSource object backed by a different Module Record.
features: [source-phase-imports, esm-phase-imports]
flags: [module]
---*/

assert.sameValue(typeof $262.createModuleSource, 'function');

var baseId = import.meta.moduleId.slice(0, import.meta.moduleId.lastIndexOf('/') + 1);

var src1 = $262.createModuleSource('export var x = 1;', baseId + 'distinct-a');
var src2 = $262.createModuleSource('export var x = 1;', baseId + 'distinct-b');

assert.notSameValue(src1, src2,
  'Two ModuleSource objects created with different ids must not be ===');
assert.sameValue(typeof src1, 'object');
assert.sameValue(typeof src2, 'object');
