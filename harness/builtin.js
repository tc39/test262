// Copyright (C) 2025 André Bargull.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
description: |
  Functions to test built-in function and constructor objects.
defines:
  - verifyBuiltinFunction
  - verifyBuiltinConstructor
---*/

// Capture primordial functions that are used in verification but might be
// destroyed *by* that process itself.
var __Function = Function;
var __Proxy = Proxy;
var __Reflect_construct = Reflect.construct;
var __Reflect_getPrototypeOf = Reflect.getPrototypeOf;
var __Reflect_isExtensible = Reflect.isExtensible;
var __Reflect_ownKeys = Reflect.ownKeys;

/**
 * Verify `fun` is a normal built-in function object with the default
 * properties as defined in
 * <https://tc39.es/ecma262/#sec-ecmascript-standard-built-in-objects>.
 */
function verifyBuiltinFunction(fun, name, length) {
  // Unless specified otherwise, a built-in object that is callable as a
  // function is a built-in function object with the characteristics described
  // in 10.3.
  assert.sameValue(typeof fun, "function");

  // Unless otherwise specified every built-in function and every built-in
  // constructor has the Function prototype object, which is the initial value
  // of the expression Function.prototype (20.2.3), as the value of its
  // [[Prototype]] internal slot.
  assert.sameValue(__Reflect_getPrototypeOf(fun), __Function.prototype);

  // Unless specified otherwise, the [[Extensible]] internal slot of a built-in
  // object initially has the value true.
  assert.sameValue(__Reflect_isExtensible(fun), true);

  // Built-in function objects that are not constructors do not have a
  // "prototype" property unless otherwise specified in the description of a
  // particular function.
  //
  // NOTE: |verifyBuiltinFunction| is more strict and allows only exactly two
  // own properties: "name" and "length".
  assert.sameValue(__Reflect_ownKeys(fun).length, 2);

  // Unless otherwise specified, the "name" property of a built-in function
  // object has the attributes { [[Writable]]: false, [[Enumerable]]: false,
  // [[Configurable]]: true }.
  verifyPrimordialProperty(fun, "name", {
    value: name,
    writable: false,
    enumerable: false,
    configurable: true,
  });

  // Unless otherwise specified, the "length" property of a built-in function
  // object has the attributes { [[Writable]]: false, [[Enumerable]]: false,
  // [[Configurable]]: true }.
  verifyPrimordialProperty(fun, "length", {
    value: length,
    writable: false,
    enumerable: false,
    configurable: true,
  });

  // Built-in function objects that are not identified as constructors do not
  // implement the [[Construct]] internal method unless otherwise specified in
  // the description of a particular function.
  assert.throws(TypeError, function() {
    // Reflect.construct throws a TypeError if `fun` is not a constructor. Use
    // the Proxy constructor because it ignores `NewTarget`.
    //
    // Two alternatives which also ensure no additional operations are called:
    //
    // 1. Create a Proxy for `fun` with a "construct" trap. Then call `new` on
    // the newly created Proxy object.
    // ```
    // var p = new Proxy(fun, {construct(){ return {}; }});
    // assert.throws(TypeError, function() { new p; });
    // ```
    //
    // 2. Use a derived class object.
    // ```
    // class C extends null { constructor() { return {}; } };
    // assert.throws(TypeError, function() {
    //   __Reflect_construct(C, [], fun);
    // });
    // ```
    __Reflect_construct(__Proxy, [{}, {}], fun);
  });
  assert.throws(TypeError, function() {
    // Test with `new` expression in addition to Reflect.construct.
    new fun();
  });
}

/**
 * Verify `fun` is a normal built-in constructor function object with the
 * default properties as defined in
 * <https://tc39.es/ecma262/#sec-ecmascript-standard-built-in-objects>.
 */
function verifyBuiltinConstructor(fun, name, length, prototype) {
  // Unless specified otherwise, a built-in object that is callable as a
  // function is a built-in function object with the characteristics described
  // in 10.3.
  assert.sameValue(typeof fun, "function");

  // Unless otherwise specified every built-in function and every built-in
  // constructor has the Function prototype object, which is the initial value
  // of the expression Function.prototype (20.2.3), as the value of its
  // [[Prototype]] internal slot.
  if (prototype === undefined) {
    prototype = __Function.prototype;
  }
  assert.sameValue(__Reflect_getPrototypeOf(fun), prototype);

  // Unless specified otherwise, the [[Extensible]] internal slot of a built-in
  // object initially has the value true.
  assert.sameValue(__Reflect_isExtensible(fun), true);

  // Unless otherwise specified, the "name" property of a built-in function
  // object has the attributes { [[Writable]]: false, [[Enumerable]]: false,
  // [[Configurable]]: true }.
  verifyPrimordialProperty(fun, "name", {
    value: name,
    writable: false,
    enumerable: false,
    configurable: true,
  });

  // Unless otherwise specified, the "length" property of a built-in function
  // object has the attributes { [[Writable]]: false, [[Enumerable]]: false,
  // [[Configurable]]: true }.
  verifyPrimordialProperty(fun, "length", {
    value: length,
    writable: false,
    enumerable: false,
    configurable: true,
  });

  // Built-in function objects that are not identified as constructors do not
  // implement the [[Construct]] internal method unless otherwise specified in
  // the description of a particular function.

  // Reflect.construct throws a TypeError if `fun` is not a constructor.
  //
  // See verifyBuiltinFunction for why Proxy is used here.
  assert.throws(Test262Error, function() {
    __Reflect_construct(__Proxy, [{}, {}], fun);

    // Throw the expected error.
    throw new Test262Error();
  });
}
