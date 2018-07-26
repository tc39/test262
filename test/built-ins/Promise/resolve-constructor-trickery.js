// Copyright (C) 2018 Leo Balter. All rights reserved.
// Copyright (C) 2018 Rick Waldron. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
description: thrower in the middle
flags: [async]
---*/

var throwable = new Test262Error("lol");
var p = Promise.resolve(42);

Object.defineProperty(p, "constructor", {
  get() {
    throw throwable;
  }
});

async function fn() {
  return await p;
}

fn().then(
  result => {
    throw new Test262Error("Promise should be rejected.");
  },
  error => {
    assert.sameValue(error, throwable, "Promise should be rejected with throwable");
  }
).then($DONE, $DONE);

