// Copyright (C) 2019  Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
description: >
    Collection of functions used to capture references cleanup from garbage collectors
---*/

function asyncGc(target) {
  var wr = new WeakRef(target);
  return asyncGcDeref(wr).then(() => {
    if (wr.deref()) {
      throw new Test262Error('Object was not collected');
    }
  });
}

async function asyncGcDeref(wr) {
  var trigger;

  // TODO: Remove this when $262.clearKeptObject becomes documented and required
  if ($262.clearKeptObjects) {
    trigger = $262.clearKeptObjects();
  }

  await $262.gc();

  return Promise.resolve(trigger);
}

// function emptyCells() {
//   var target = {};
//   var wr = new WeakRef(target);
//   var collected = asyncGc(target, clearKeptObjects());
//   target = null;
//   return collected.then(() => {
//     return wr.deref();
//   });
// }

// emptyCells().then((derefAsync) => {
//   assert.sameValue(derefAsync, undefined);
// });

