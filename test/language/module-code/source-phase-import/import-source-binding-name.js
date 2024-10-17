// Copyright (C) 2024 Chengzhong Wu. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
description: >
  ImportBinding in ImportDeclaration may be 'source' and 'from'
esid: sec-modules
info: |
  ImportDeclaration:
    import source ImportedBinding FromClause ;

features: [source-phase-imports, source-phase-imports-module-source]
flags: [module]
---*/

import source from '<module source>';
import from from '<module source>';
