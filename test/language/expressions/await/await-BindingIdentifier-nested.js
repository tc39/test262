// Copyright 2016 Microsoft, Inc. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Brian Terlson <brian.terlson@microsoft.com>
es7id: pending
description: >
  Await is allowed as an identifier in functions nested in async functions
negative: SyntaxError
---*/

async function foo() {
  function await() {
  }
}
