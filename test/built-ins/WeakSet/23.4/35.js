// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: 23.4.3.6 - WeakSet.prototype[@@toStringTag]
author: Ian Halliday
---*/

if (WeakSet.prototype[Symbol.toStringTag] !== "WeakSet")
    $ERROR("WeakSet.prototype[@@toStringTag] is not \"WeakSet\"");

var descriptor = Object.getOwnPropertyDescriptor(WeakSet.prototype, Symbol.toStringTag);

if (descriptor.writable !== false || descriptor.enumerable !== false || descriptor.configurable !== true)
    $ERROR("WeakSet.prototype[@@toStringTag] descriptor is incorrect");
