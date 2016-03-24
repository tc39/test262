// Copyright 2016 Microsoft, Inc. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Brian Terlson <brian.terlson@microsoft.com>
es7id: pending
description: >
  Await in a generator is an identifier
---*/

function* foo(await) { yield await; };
assert.sameValue(foo(1).next().value, 1);
