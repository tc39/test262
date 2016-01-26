// Copyright 2016 Microsoft, Inc. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Brian Terlson <brian.terlson@microsoft.com>
es7id: pending
description: Async function declarations have a name property
---*/

async function foo () { };

assert.sameValue(foo.name, "foo");
