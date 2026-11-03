// Copyright (C) 2023 Igalia, S. L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-agents
description: >
  The context snapshot is stored in a field of the agent record, so it is
  preserved across realms.
info: |
  TODO
features: [AsyncContext, cross-realm]
---*/

const realm = $262.createRealm().global;

realm.eval(`
  var asyncSnapshot;

  function wrap(cb) {
    asyncSnapshot.run(cb);
  }
`);

const asyncVar1 = new AsyncContext.Variable();
const asyncVar2 = new AsyncContext.Variable();
const asyncVar3 = new AsyncContext.Variable();

asyncVar1.run(42, () => {

  realm.eval(`
    asyncSnapshot = new AsyncContext.Snapshot();
  `);

  asyncVar2.run("foo", () => {
    asyncVar3.run("bar", () => {
      asyncVar1.run("baz", () => {

        realm.wrap(() => {

          assert.sameValue(asyncVar1.get(), 42);
          assert.sameValue(asyncVar2.get(), undefined);
          assert.sameValue(asyncVar3.get(), undefined);

        });

      });
    });
  });
});
