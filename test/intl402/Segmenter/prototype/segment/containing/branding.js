// Copyright 2020 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-%segmentsprototype%.containing
description: Verifies the branding check for the "segment" function of the %Segments.prototype%.containing.
info: |
    %Segments.prototype%.containing ( index )
    Unless specified otherwise in this document, the objects, functions, and constructors described in this standard are subject to the generic requirements and restrictions specified for standard built-in ECMAScript objects in the ECMAScript 2020 Language Specification, 11th edition, clause 17, or successor.
    Every built-in function object, including constructors, that is not identified as an anonymous function has a name property whose value is a String. Unless otherwise specified, this value is the name that is given to the function in this specification.
    Unless otherwise specified, the name property of a built-in function object, if it exists, has the attributes { [[Writable]]: false, [[Enumerable]]: false, [[Configurable]]: true }.

includes: [propertyHelper.js]
features: [Intl.Segmenter]
---*/
const segment = (new Intl.Segmenter()).segment("123");
const containing = segment.containing;
assert.sameValue(typeof containing, "function");
assert.throws(TypeError, () => containing.call(undefined), "undefined");
assert.throws(TypeError, () => containing.call(null), "null");
assert.throws(TypeError, () => containing.call(true), "true");
assert.throws(TypeError, () => containing.call(""), "empty string");
assert.throws(TypeError, () => containing.call(Symbol()), "symbol");
assert.throws(TypeError, () => containing.call(1), "1");
assert.throws(TypeError, () => containing.call({}), "plain object");
assert.throws(TypeError, () => containing.call(Intl.Segmenter), "Intl.Segmenter");
assert.throws(TypeError, () => containing.call(Intl.Segmenter.prototype), "Intl.Segmenter.prototype");
assert.sameValue(undefined, containing.call(segment, -1));
