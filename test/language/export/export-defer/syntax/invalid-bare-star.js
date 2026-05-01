// Copyright (C) 2026 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-exports
description: >
  `export defer *` without `as` is not valid
info: |
  ExportDeclaration :
    `export` `defer` ExportFromClause FromClause WithClause? `;`

  ExportFromClause :
    `*`
    `*` `as` ModuleExportName
    NamedExports

  Bare `*` is not a valid ExportFromClause for deferred re-exports.

flags: [module]
features: [export-defer]

negative:
  phase: parse
  type: SyntaxError
---*/

$DONOTEVALUATE();

export defer * from "./dep_FIXTURE.js";
