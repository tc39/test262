// Copyright (C) 2021 Sergey Rubanov. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-promise.race
description: >
  The initial value of the *"race"* property is the same function object as the initial value of the `Promise.anySettled` property.
features: [Promise.anySettled]
---*/

assert.sameValue(Promise.race, Promise.anySettled);
