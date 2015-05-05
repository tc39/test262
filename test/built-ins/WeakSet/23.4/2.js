// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: >
    23.4.1.1 - 7d.    Let iter be the result of
    GetIterator(ToObject(iterable)).
author: Nikhil Suryanarayanan
---*/

var called = false;
var iterable = {
    [Symbol.iterator] : function () {
        called = true;
        return { next: function () { return { done: true }; } };
    }
};

var ws = new WeakSet(iterable);

if (called === false)
    $ERROR("GetIterator was not called");
