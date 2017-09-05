// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: The length property of BigInt.parseInt does not have the attribute DontDelete
esid: sec-bigint-parseint-string-radix
description: Checking use hasOwnProperty, delete
---*/

assert.sameValue(BigInt.parseInt.hasOwnProperty('length'), true);

delete BigInt.parseInt.length;

assert.sameValue(BigInt.parseInt.hasOwnProperty('length'), false);

assert.notSameValue(BigInt.parseInt.length, undefined);
