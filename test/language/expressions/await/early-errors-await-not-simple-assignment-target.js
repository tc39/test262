// Copyright 2016 Microsoft, Inc. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Brian Terlson <brian.terlson@microsoft.com>
es7id: pending
description: >
  await is not a simple assignment target and cannot be assigned to.
negative: ReferenceError
---*/

async function foo() {
  (await 1) = 1;
}
