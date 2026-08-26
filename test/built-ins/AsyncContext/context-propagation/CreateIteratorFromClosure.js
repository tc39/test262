// Copyright (C) 2023 Igalia, S. L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
description: TODO
features: [AsyncContext]
---*/

const asyncVar = new AsyncContext.Variable();

const array = [];
Object.defineProperty(array, 0, {
  get() {
    assert.sameValue(asyncVar.get(), "bar");
  }
});

const iter = asyncVar.run("foo", () => array.values());

asyncVar.run("bar", () => {
  iter.next();
});
