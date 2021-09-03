FRONTMATTER
^ expected errors | v input
// Copyright (C) 2021 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
description: YAML supports mutli-line scalar values in flow notation, but
  some consumers of Test262 do not, so they should be disallowed.
esid: sec-assignment-operators-static-semantics-early-errors
info: This is some information
---*/

function* g() {
  yield 23;
}
