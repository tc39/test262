// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: yield can be used outside a generator context
author: Nikhil Suryanarayanan
flags: [noStrict]
---*/

var yield = 1;
yield ++;
