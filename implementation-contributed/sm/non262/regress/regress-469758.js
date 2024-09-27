// Copyright (C) 2024 Mozilla Corporation. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
includes:
- non262-regress-shell.js
- non262-shell.js
- shell.js
flags:
- noStrict
description: |
  pending
esid: pending
---*/// Any copyright is dedicated to the Public Domain.
// http://creativecommons.org/licenses/publicdomain/

assertThrowsInstanceOfWithMessageCheck(
    () => {
      {let i=1}
      {let j=1; [][j][2]}
    },
    TypeError,
    message => message.endsWith("[][j] is undefined"));

