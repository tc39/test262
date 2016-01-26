// copyright 2016 microsoft, inc. all rights reserved.
// this code is governed by the bsd license found in the license file.

/*---
author: brian terlson <brian.terlson@microsoft.com>
es7id: pending
description: >
  async function bodies are executed immediately (unlike generators)
---*/

let called;
async function foo() {
  called = true;
  await new promise();
}

foo();
assert(called);
