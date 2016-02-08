// Copyright (C) 2015 Jordan Harband. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
description: Object.entries does not include Symbol keys.
es7id: pending
author: Jordan Harband
features: [Symbol]
---*/

var value = {};
var enumSym = Symbol('enum');
var nonEnumSym = Symbol('nonenum');
var symValue = Symbol('value');

var obj = { key: symValue };
obj[enumSym] = value;
Object.defineProperty(obj, nonEnumSym, { enumerable: false, value: value });

var result = Object.entries(obj);

assert.sameValue(Array.isArray(result), true, 'result is an array');
assert.sameValue(result.length, 1, 'result has 1 item');

assert.sameValue(Array.isArray(result[0]), true, 'first entry is an array');

assert.sameValue(result[0][0], 'key', 'first entry has key "key"');
assert.sameValue(result[0][1], symValue, 'first entry has value `symValue`');
