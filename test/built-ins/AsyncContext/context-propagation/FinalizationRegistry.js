// Copyright (C) 2023 Igalia, S. L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-finalization-registry-objects
description: >
  The FinalizationRegistry cleanup callback uses HostMakeJobCallback and
  HostCallJobCallback, which propagate an async context snapshot.
info: |
  TODO
flags: [async, non-deterministic]
features: [AsyncContext, FinalizationRegistry, host-gc-required]
---*/

const asyncVar = new AsyncContext.Variable();

function cleanupCallback() {
  try {
    assert.sameValue(asyncVar.get(), "foo");
    $DONE();
  } catch (err) {
    $DONE(err);
  }
}

const registry = asyncVar.run("foo", () => {
  return new FinalizationRegistry(cleanupCallback);
});

asyncVar.run("bar", () => {
  let target = {};
  registry.register(target);
});

asyncVar.run("baz", () => $262.gc());
