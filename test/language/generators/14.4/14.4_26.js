// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: yield used an identifier
author: Nikhil Suryanarayanan
flags: [noStrict]
---*/

var yield = 1;
if( yield * 1 !== 1)
    $ERROR("yield when used as an identifier failed");
