// Copyright (C) 2023 Igalia, S. L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
description: TODO
flags: [async]
features: [AsyncContext]
---*/

const asyncVar = new AsyncContext.Variable();

const expectedSymbol = Symbol("expected");

const thenable = {
  then(cb) {
    assert.sameValue(asyncVar.get(), expectedSymbol);
    cb();
  }
};

asyncVar.run(expectedSymbol, () => {
  Promise.resolve(thenable).then(() => $DONE());
});
