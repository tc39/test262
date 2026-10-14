// Copyright (C) 2026 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-exports
description: >
  `export defer` can be used with namespace re-export
info: |
  ExportDeclaration :
    `export` `defer` ExportFromClause FromClause WithClause? `;`

  ExportFromClause :
    `*`
    `*` `as` ModuleExportName
    NamedExports

flags: [module]
features: [export-defer]
---*/

export defer * as ns from "./dep_FIXTURE.js";
