// Copyright (C) 2024 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
includes:
- non262-JSON-shell.js
- non262-shell.js
- shell.js
flags:
- noStrict
features:
- Record
description: |
  pending
esid: pending
---*/
assert.sameValue(
	JSON.parseImmutable('{"x":1,"a":[1,2,{},[]]}'),
	#{ x: 1, a: #[1, 2, #{}, #[]] }
);

assert.sameValue(
	JSON.parseImmutable('{"a":1,"a":2}'),
	#{ a: 2 }
);

