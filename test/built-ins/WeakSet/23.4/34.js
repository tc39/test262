// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: >
    23.4.3.5 - WeakSet.prototype.has -  7.    Repeat for each e that
    is an element of entries, if e is not empty and SameValue(e,
    value), then return true.

    23.4.3.5 - WeakSet.prototype.has -  8.    Return false.
author: Nikhil Suryanarayanan
---*/

var ws = new WeakSet();
var num = new Number(1);

ws.add(num);

if (ws.has(num) !== true)
    $ERROR("Expected value true for Weakset 'has' 'num'");

if (ws.has(new Number(1)) !== false)
    $ERROR("Expected value false for WeakSet 'has' new Number(1) ");
