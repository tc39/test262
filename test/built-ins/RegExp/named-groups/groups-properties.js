// Copyright 2017 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
description: Tests for the ways that properties are created on the groups object
esid: pending
features: [regexp-named-groups]
includes: [compareArray.js, propertyHelper.js]
---*/

// Properties created on result.groups.
assert(compareArray(["fst", "snd"],
             Object.getOwnPropertyNames(
                 /(?<fst>.)|(?<snd>.)/u.exec("abcd").groups)));

// Properties are created with Define, not Set
let counter = 0;
Object.defineProperty(Object.prototype, 'x', {set() { counter++; }});
let groups = /(?<x>.)/.exec('a').groups;
assert.sameValue(counter, 0);

// Properties are writable, enumerable and configurable
// (from CreateDataProperty)
verifyWritable(groups, "x");
verifyEnumerable(groups, "x");
verifyConfigurable(groups, "x");

// The '__proto__' property on the groups object.
assert.sameValue(undefined, /(?<a>.)/u.exec("a").groups.__proto__);
assert.sameValue("a", /(?<__proto__>a)/u.exec("a").groups.__proto__);

// The prototype of the groups object is null
groups = /(?<x>)/.exec("").groups;
assert.sameValue("", groups.x);
assert.sameValue(null, groups.__proto__);
