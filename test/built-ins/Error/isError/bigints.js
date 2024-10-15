// Copyright (C) 2024 Jordan Harband.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-error.iserror
description: >
  Returns false on bigints
features: [BigInt]
---*/

assert.sameValue(Error.isError(0n), false);
assert.sameValue(Error.isError(42n), false);
assert.sameValue(Error.isError(new BigInt(0)), false);
assert.sameValue(Error.isError(new BigInt(42)), false);
