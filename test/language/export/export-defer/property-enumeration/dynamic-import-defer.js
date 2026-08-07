// Copyright (C) 2026 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-module-namespace-exotic-objects-ownpropertykeys
description: >
  Reflect.ownKeys lists deferred-reexport names for `import.defer(...)`
info: |
  [[OwnPropertyKeys]] ( )
    1. Let _exports_ be _obj_.[[Exports]].
    1. Let _symbolKeys_ be OrdinaryOwnPropertyKeys(_obj_).
    1. Return the list-concatenation of _exports_ and _symbolKeys_.

  GetModuleNamespace ( _module_ [ , _phase_ ] )
    1. ...
    1. Let _exportedNames_ be _module_.GetExportedNames().
    1. Let _unambiguousNames_ be a new empty List.
    1. For each element _name_ of _exportedNames_, do
      1. ...
    1. Set _namespace_ to ModuleNamespaceCreate(_module_, _unambiguousNames_, _phase_).
       (ModuleNamespaceCreate stores the sorted _unambiguousNames_ in
       the namespace's [[Exports]] slot.)
    1. ...

  GetExportedNames ( ) — change introduced by deferred-reexports:
    1. ...
    1. Let _allNamedExportEntries_ be the list-concatenation of
       _module_.[[LocalExportEntries]], _module_.[[IndirectExportEntries]],
       and _module_.[[OptionalIndirectExportEntries]].
    1. For each ExportEntry Record _e_ of _allNamedExportEntries_, do
      1. Assert: _e_.[[ExportName]] is not null.
      1. Append _e_.[[ExportName]] to _exportedNames_.
    1. ...

  An `export defer { x } from "./dep"` declaration adds an entry to
  [[OptionalIndirectExportEntries]], so x appears in [[Exports]] — and
  therefore in Reflect.ownKeys(ns) — without triggering deferred-dep
  evaluation.
flags: [module, async]
features: [export-defer, import-defer]
includes: [asyncHelpers.js, compareArray.js]
---*/

import "./setup_FIXTURE.js";

asyncTest(async function () {
  const ns = await import.defer("./barrel_FIXTURE.js");

  assert.compareArray(globalThis.evaluations, [],
    "import.defer leaves barrel unevaluated until first interaction with ns");

  assert.compareArray(
    Reflect.ownKeys(ns),
    ["direct", "exported", Symbol.toStringTag],
    "keys list includes both direct and deferred-reexported names"
  );

  assert.compareArray(globalThis.evaluations, ["barrel"],
    "Reflect.ownKeys triggers barrel evaluation but not the deferred dep");
});
