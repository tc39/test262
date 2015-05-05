// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: 23.4.1.2 - new WeakSet(... argumentsList)
author: Nikhil Suryanarayanan
---*/

var ws = new WeakSet();

if (!(ws instanceof WeakSet))
    $ERROR("WeakSet instance is not an instance of WeakSet");
