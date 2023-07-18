// Copyright (C) 2023 Igalia, S. L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-asynccontext-variable
description: >
    The AsyncContext.Variable constructor throws when passed an options bag
    whose `defaultValue` getter throws.
info: |
  AsyncContext.Variable ( options )

  4. If options is an Object, then
    ...
    c. Set defaultValue to ? Get(options, "defaultValue").
  ...
features: [AsyncContext]
---*/

function CustomError() { }

const options = {
  get defaultValue() {
    throw new CustomError();
  }
};

assert.throws(CustomError, () => {
  new AsyncContext.Variable(options);
});
