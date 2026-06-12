// Copyright (C) 2024 Igalia S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-json.rawjson
description: >
  JSON.rawJSON meets the requirements for standard built-in objects
info: |
  ECMAScript Standard Built-in Objects
  ...
  Unless specified otherwise, the [[Extensible]] internal slot of a built-in
  object initially has the value true.
  ...
  Unless otherwise specified every built-in function and every built-in
  constructor has the Function prototype object, which is the initial value of
  the expression Function.prototype (20.2.3), as the value of its [[Prototype]]
  internal slot.
  ...
  Built-in function objects that are not constructors do not have a "prototype"
  property unless otherwise specified in the description of a particular
  function.
  ...
  Each built-in function defined in this specification is created by calling the
  CreateBuiltinFunction abstract operation (10.3.4). The values of the length
  and name parameters are the initial values of the "length" and "name"
  properties as discussed below. The values of the prefix parameter are
  similarly discussed below.

includes: [propertyHelper.js]
features: [json-parse-with-source]
---*/

assert.sameValue(
  Object.isExtensible(JSON.rawJSON),
  Object.isExtensible(Object.prototype),
  "JSON.rawJSON extensibility matches Object.prototype",
);

assert.sameValue(
  Object.getPrototypeOf(JSON.rawJSON),
  Function.prototype,
  "JSON.rawJSON [[Prototype]] is Function.prototype"
);

assert.sameValue(
  Object.getOwnPropertyDescriptor(JSON.rawJSON, "prototype"),
  undefined,
  "JSON.rawJSON has no own prototype property"
);

verifyPrimordialCallableProperty(JSON, "rawJSON", "rawJSON", 1);
