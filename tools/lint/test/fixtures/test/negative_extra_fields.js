NEGATIVE
^ expected errors | v input
// Copyright (C) 2021 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-assignment-operators-static-semantics-early-errors
description: Extraneous field in "negative" frontmatter
negative:
  flags: strict
  type: ReferenceError
  phase: runtime
---*/

x;
let x;
