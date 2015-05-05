// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: Const declarations can have multiple bindings in a single statement
---*/

const x = 1, y = 2;
if (x !== 1 || y !== 2)
   $ERROR("Testcase returned an unexpected value");
