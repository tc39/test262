// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: >
    24.3.3.3 - WeakSet.prototype.constructor is the %WeakSet%
    intrinsic object
author: Nikhil Suryanarayanan
---*/

if (WeakSet.prototype.constructor !== WeakSet)
    $ERROR("WeakSet.prototype.constructor is not WeakSet");
