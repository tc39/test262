// Copyright (C) 2024 Chengzhong Wu. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
description: >
  import source in ImportDeclaration may include line terminators
esid: sec-modules
info: |
  ImportDeclaration:
    import source ImportedBinding FromClause ;

  This test uses all four LineFeed characters in order to completely verify the
  grammar.

  16.2.1.7.2 GetModuleSource ( )
  Source Text Module Record provides a GetModuleSource implementation that always returns an abrupt completion indicating that a source phase import is not available.

features: [source-phase-imports, source-phase-imports-module-source]
flags: [module]
---*/

import

  source

  y from '<module source>';
