// Copyright (C) 2026 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-scripts
description: >
  The `export defer` declaration may not appear in a ScriptBody
info: |
  A.5 Scripts and Modules

  ScriptBody:
    StatementList
features: [export-defer]
negative:
  phase: parse
  type: SyntaxError
---*/

$DONOTEVALUATE();

export defer { x } from "./dep.js";
