// Copyright (C) 2023 Ron Buckton. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: pending
description: >
    await using declarations with initialisers in statement positions:
    case Expression : StatementList
flags: [async]
includes: [asyncHelpers.js]
features: [explicit-resource-management]
---*/
asyncTest(async function () {
    switch (true) { case true: await using x = null; }
});
