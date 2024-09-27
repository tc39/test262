// Copyright (C) 2024 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
includes:
- non262-module-shell.js
- non262-shell.js
- shell.js
flags:
- noStrict
features: []
info: |
  support file
description: |
  pending
esid: pending
---*/
import A from "./bug1689499-a.js";
if (true) await 0;
export default "C";
throw Error("FAIL");


