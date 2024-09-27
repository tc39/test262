// Copyright (C) 2024 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
includes:
- non262-JSON-shell.js
- non262-shell.js
- shell.js
flags:
- noStrict
description: |
  pending
esid: pending
---*/testJSON("{}...", true);
testJSON('{"foo": truBBBB}', true);
testJSON('{foo: truBBBB}', true);
testJSON('{"foo": undefined}', true);
testJSON('{"foo": ]', true);
testJSON('{"foo', true);

/******************************************************************************/

print("Tests complete");
