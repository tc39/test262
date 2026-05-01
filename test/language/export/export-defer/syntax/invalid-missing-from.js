// Copyright (C) 2026 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-exports
description: >
  `export defer` must include a `from` clause
info: |
  ExportDeclaration :
    `export` `defer` ExportFromClause FromClause WithClause? `;`

  ExportFromClause :
    `*`
    `*` `as` ModuleExportName
    NamedExports

  NamedExports :
    `{` `}`
    `{` ExportsList `}`
    `{` ExportsList `,` `}`

  ExportsList :
    ExportSpecifier
    ExportsList `,` ExportSpecifier

  ExportSpecifier :
    ModuleExportName
    ModuleExportName `as` ModuleExportName

  Deferred exports must be re-exports; a FromClause is required.

flags: [module]
features: [export-defer]

negative:
  phase: parse
  type: SyntaxError
---*/

$DONOTEVALUATE();

export defer { x };
