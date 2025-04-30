/*
 * Any copyright is dedicated to the Public Domain.
 * http://creativecommons.org/licenses/publicdomain/
 */

/*---
flags:
  - noStrict
description: |
  Reconfiguring the first expando property added to an Error object shouldn't assert
esid: pending
---*/

var err = new Error(); // no message argument => no err.message property
err.expando = 17;
Object.defineProperty(err, "expando", { configurable: false });
