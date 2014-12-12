// Copyright (C) 2014 Domenic Denicola. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
description: Array.prototype.includes does not skip holes; if the array has a prototype it gets from that
author: Domenic Denicola
---*/

var holesEverywhere = [,,,];
holesEverywhere.__proto__ = { 1: 'a' };
holesEverywhere.__proto__.__proto__ = Array.prototype;
assert(holesEverywhere.includes('a'),
    'Expected array with many holes but a prototype containing the value to return true');

var oneHole = ['a', 'b',, 'd'];
oneHole.__proto__ = { get 2() { return 'c'; } };
assert(Array.prototype.includes.call(oneHole, 'c'),
    'Expected array with a hole to fall back to a getter on its prototype');
