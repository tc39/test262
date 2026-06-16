// Copyright (C) 2025 Ecma International. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-source-text-module-record-initialize-environment
description: >
  Static import source of a module whose [[ModuleSource]] is ~empty~ throws SyntaxError.
info: |
  InitializeEnvironment ( )

  ...
  7. For each ImportEntry Record in of module.[[ImportEntries]], do
    ...
    c. Else if in.[[ImportName]] is ~source~, then
      i. Let moduleSourceObject be importedModule.[[SourceRecord]].[[ModuleSource]].
      ii. If moduleSourceObject is ~empty~, throw a *SyntaxError* exception.

  A JSON module has [[ModuleSource]] = ~empty~, so a static source import of it
  must throw SyntaxError during linking.
negative:
  phase: resolution
  type: SyntaxError
features: [source-phase-imports, esm-phase-imports, import-attributes, json-modules]
flags: [module]
---*/

$DONOTEVALUATE();
import source jsonSrc from './import-source-empty-source-error_FIXTURE.json' with { type: 'json' };
