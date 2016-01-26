// Copyright 2016 Microsoft, Inc. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Brian Terlson <brian.terlson@microsoft.com>
es7id: pending
description: >
  %AsyncFunction% has a name of "AsyncFunction".
---*/

var AsyncFunction = async function foo() { }.constructor;
assert.sameValue(AsyncFunction.name, "AsyncFunction");
