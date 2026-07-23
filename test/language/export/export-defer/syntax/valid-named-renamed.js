// Copyright (C) 2026 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-exports
description: >
  `export defer` can rename a named re-export
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

flags: [module]
features: [export-defer]
---*/

export defer { x as y } from "./dep_FIXTURE.js";
