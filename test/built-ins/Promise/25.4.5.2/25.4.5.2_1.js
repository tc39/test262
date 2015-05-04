// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: >
    25.4.5.2 - initial value of Promise.prototype.constructor is the
    standard built-in Promise constructor
author: Nikhil Suryanarayanan
---*/

if(Promise.prototype.constructor !== Promise)
    $ERROR("Initial value of Promise.prototype.ctor is incorrect");
