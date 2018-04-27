// Copyright 2018 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: pending
description: >
    Checks the properties of the Locale constructor.
info: |
    Every other data property described in clauses 18 through 26 and in Annex B.2 has the attributes { [[Writable]]: true, [[Enumerable]]: false, [[Configurable]]: true } unless otherwise specified.
    Unless specified otherwise in this document, the objects, functions, and constructors described in this standard are subject to the generic requirements and restrictions specified for standard built-in ECMAScript objects in the ECMAScript 2019 Language Specification, 10th edition, clause 17, or successor.
    The Locale constructor is a standard built-in property of the Intl object.
features: [Intl.Locale]
---*/

const propdesc = Object.getOwnPropertyDescriptor(Intl, "Locale");
assert.sameValue(propdesc.writable, true);
assert.sameValue(propdesc.enumerable, false);
assert.sameValue(propdesc.configurable, true);
assert.sameValue(propdesc.value, Intl.Locale);

assert.sameValue(typeof Intl.Locale, "function");
assert.sameValue(Object.getPrototypeOf(Intl.Locale), Function.prototype);
