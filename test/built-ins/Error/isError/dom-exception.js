// Copyright 2024 Lionel Rowe. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-error.iserror
description: >
  Returns true on DOMException instances
features: [Error.isError]
---*/

if (typeof DOMException === 'function') {
  assert.sameValue(Error.isError(new DOMException()), true);
}
