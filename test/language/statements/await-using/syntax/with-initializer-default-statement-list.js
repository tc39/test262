// Copyright (C) 2023 Ron Buckton. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: pending
description: >
    await using declarations with initialisers in statement positions:
    default : StatementList
flags: [async]
includes: [asyncHelpers.js]
features: [explicit-resource-management]
---*/
asyncTest(async function () {
    switch (true) { default: await using x = null; }
});
