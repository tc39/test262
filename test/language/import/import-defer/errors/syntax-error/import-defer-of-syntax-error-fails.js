// Copyright (C) 2024 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-module-namespace-exotic-objects-get-p-receiver-EnsureDeferredNamespaceEvaluation
description: >
  Module evaluation errors are thrown
info: |
  LoadRequestedModules ([ _hostDefined_ ])
    - just notice that it does not check if the module is deferred

features: [import-defer]

negative:
  phase: resolution
  type: SyntaxErrpr
---*/

import defer * as ns "./syntax-error_FIXTURE.js";
