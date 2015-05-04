// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: 14.4.14 - BindingIndentifier name should not be hoisted
author: Nikhil Suryanarayanan
---*/

var gfoo = function*baz(){}
if(typeof baz !== "undefined")
    $ERROR('Baz should not be hoisted');
