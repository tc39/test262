// Copyright (C) 2026 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-exports
description: >
  `export defer` cannot be used with default exports
info: |
  ExportDeclaration :
    `export` `defer` ExportFromClause FromClause WithClause? `;`

  Default exports cannot be deferred.

flags: [module]
features: [export-defer]

negative:
  phase: parse
  type: SyntaxError
---*/

$DONOTEVALUATE();

export defer default x;
