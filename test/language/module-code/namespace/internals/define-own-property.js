// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-module-namespace-exotic-objects-defineownproperty-p-desc
description: >
    The [[DefineOwnProperty]] internal method returns `true` if no change is
    requested, and `false` otherwise.
flags: [module]
features: [Symbol.iterator, Reflect, Symbol, Symbol.toStringTag]
---*/

import * as ns from './define-own-property.js';
export var local1;
var local2;
export { local2 as renamed };
export { local1 as indirect } from './define-own-property.js';
var sym = Symbol('test262');

const exported = ['local1', 'renamed', 'indirect'];


// Non-existant properties.

for (const key of ['local2', 0, sym, Symbol.iterator]) {
  assert.sameValue(
    Reflect.defineProperty(ns, key, {}),
    false,
    'Reflect.defineProperty(ns, , {}) must return false'
  );
  assert.throws(TypeError, function() {
    Object.defineProperty(ns, key, {});
  }, 'Object.defineProperty(ns, key, {}) throws a TypeError exception');
}


// Own properties. No change requested.

for (const key of ([...exported, Symbol.toStringTag])) {
  assert.sameValue(
    Reflect.defineProperty(ns, key, {}),
    true,
    'Reflect.defineProperty(ns, , {}) must return true'
  );
  assert.sameValue(
    Object.defineProperty(ns, key, {}),
    ns,
    'Object.defineProperty(ns, , {}) returns ns'
  );

}

assert.sameValue(
  Reflect.defineProperty(ns, 'indirect',
      {writable: true, enumerable: true, configurable: false}),
  true,
  'Reflect.defineProperty(ns, "indirect", {writable: true, enumerable: true, configurable: false}) must return true'
);
assert.sameValue(
  Object.defineProperty(ns, 'indirect',
      {writable: true, enumerable: true, configurable: false}),
  ns,
  'Object.defineProperty(ns, "indirect", {writable: true, enumerable: true, configurable: false}) returns ns'
);

assert.sameValue(
  Reflect.defineProperty(ns, Symbol.toStringTag,
      {value: "Module", writable: false, enumerable: false,
       configurable: false}),
  true,
  'Reflect.defineProperty( ns, Symbol.toStringTag, {value: "Module", writable: false, enumerable: false, configurable: false} ) must return true'
);
assert.sameValue(
  Object.defineProperty(ns, Symbol.toStringTag,
      {value: "Module", writable: false, enumerable: false,
       configurable: false}),
  ns,
  'Object.defineProperty( ns, Symbol.toStringTag, {value: "Module", writable: false, enumerable: false, configurable: false} ) returns ns'
);


// Own properties. Change requested.

for (const key of ([...exported, Symbol.toStringTag])) {
  assert.sameValue(
    Reflect.defineProperty(ns, key, {value: 123}),
    false,
    'Reflect.defineProperty(ns, , {value: 123}) must return false'
  );
  assert.throws(TypeError, function() {
    Object.defineProperty(ns, key, {value: 123});
  }, 'Object.defineProperty(ns, key, {value: 123}) throws a TypeError exception');
}

assert.sameValue(
  Reflect.defineProperty(ns, 'indirect',
      {writable: true, enumerable: true, configurable: true}),
  false,
  'Reflect.defineProperty(ns, "indirect", {writable: true, enumerable: true, configurable: true}) must return false'
);
assert.throws(TypeError, function() {
  Object.defineProperty(ns, 'indirect',
      {writable: true, enumerable: true, configurable: true});
}, 'Object.defineProperty(ns, "indirect", {writable: true, enumerable: true, configurable: true}) throws a TypeError exception');

assert.sameValue(
  Reflect.defineProperty(ns, Symbol.toStringTag,
      {value: "module", writable: false, enumerable: false,
       configurable: false}),
  false,
  'Reflect.defineProperty( ns, Symbol.toStringTag, {value: "module", writable: false, enumerable: false, configurable: false} ) must return false'
);
assert.throws(TypeError, function() {
  Object.defineProperty(ns, Symbol.toStringTag,
      {value: "module", writable: false, enumerable: false,
       configurable: false});
}, 'Object.defineProperty(ns, Symbol.toStringTag, {value: "module", writable: false, enumerable: false, configurable: false}) throws a TypeError exception');
