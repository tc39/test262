// Copyright 2018 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: pending
description: >
    Checks the "constructor" property of the Locale prototype object.
info: |
    Intl.Locale.prototype.constructor

    The initial value of Intl.Locale.prototype.constructor is %Locale%.

    Unless specified otherwise in this document, the objects, functions, and constructors described in this standard are subject to the generic requirements and restrictions specified for standard built-in ECMAScript objects in the ECMAScript 2019 Language Specification, 10th edition, clause 17, or successor.

    Every other data property described in clauses 18 through 26 and in Annex B.2 has the attributes { [[Writable]]: true, [[Enumerable]]: false, [[Configurable]]: true } unless otherwise specified.
features: [Intl.Locale]
---*/

const propdesc = Object.getOwnPropertyDescriptor(Intl.Locale.prototype, "constructor");
assert.sameValue(propdesc.writable, true);
assert.sameValue(propdesc.enumerable, false);
assert.sameValue(propdesc.configurable, true);
assert.sameValue(propdesc.value, Intl.Locale);
