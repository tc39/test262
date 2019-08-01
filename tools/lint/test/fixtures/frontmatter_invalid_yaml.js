FRONTMATTER
^ expected errors | v input
// Copyright (C) 2017 Mike Pennisi. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-assignment-operators-static-semantics-early-errors
description: Applied to a "covered" YieldExpression
info: This is some information
features: [generators
---*/

function* g() {
  yield 23;
}
