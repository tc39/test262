FEATURES
^ expected errors | v input
// Copyright (C) 2021 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-assignment-operators-static-semantics-early-errors
description: Duplicated values in "features" frontmatter
features: [object-spread, async-functions, object-spread]
---*/

async function f({ ...a }) {}
