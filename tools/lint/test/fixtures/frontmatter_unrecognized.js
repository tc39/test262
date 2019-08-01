FRONTMATTER
^ expected errors | v input
// Copyright (C) 2017 Mike Pennisi. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-assignment-operators-static-semantics-early-errors
description: Applied to a "covered" YieldExpression
info: This is some information
unrecognized_attr: foo
---*/

function* g() {
  yield 23;
}
