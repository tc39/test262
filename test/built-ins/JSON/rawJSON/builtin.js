// Copyright (C) 2024 Igalia S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-json.rawjson
description: >
  JSON.rawJSON meets the requirements for built-in objects
info: |
  Unless specified otherwise, a built-in object that is callable as a function
  is a built-in function object with the characteristics described in 10.3.
  Unless specified otherwise, the [[Extensible]] internal slot of a built-in
  object initially has the value *true*.

  Unless otherwise specified every built-in function and every built-in
  constructor has the Function prototype object, which is the initial value of
  the expression Function.prototype (20.2.3), as the value of its [[Prototype]]
  internal slot.

  Built-in functions that are not constructors do not have a "prototype"
  property unless otherwise specified in the description of a particular
  function.
features: [json-parse-with-source]
---*/

assert(Object.isExtensible(JSON.rawJSON), "JSON.rawJSON is extensible");

assert.sameValue(
  Object.getPrototypeOf(JSON.rawJSON),
  Function.prototype,
  "Prototype of JSON.rawJSON is Function.prototype"
);

assert.sameValue(
  Object.getOwnPropertyDescriptor(JSON.rawJSON, "prototype"),
  undefined,
  "JSON.rawJSON has no own prototype property"
);
