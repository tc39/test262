// Copyright (C) 2023 Ron Buckton. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: pending
description: >
    using declarations with initialisers in statement positions:
    case Expression : StatementList
features: [explicit-resource-management]
---*/
switch (true) { case true: using x = null; }
