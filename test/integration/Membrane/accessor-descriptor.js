// Copyright (C) 2019 Alexander J. Vincent. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
 description: Test an accessor descriptor of a Membrane proxy.
 esid: pending
 features: [Proxy,WeakMap,Reflect,Map]
 includes: [integration-Membrane.js]
---*/

const M = new Membrane();
const wetGraph = M.getObjectGraph("wet", true);
const dryGraph = M.getObjectGraph("dry", true);

let cachedValue = { toString: () => "original value" };
let expectedValue = { toString: () => "expected" };

const rawObject = {
  toString: () => "membrane object",
};
Reflect.defineProperty(rawObject, "accessor", {
  enumerable: true,
  configurable: false,
  get: function() { return cachedValue; },
  set: function(value) {
    cachedValue = value;
    return value;
  }
});

const wetObject = M.convertToProxy(rawObject, wetGraph, true);
const dryObject = M.convertToProxy(wetObject, dryGraph);

M.convertToProxy(cachedValue, wetGraph, true);
const dryCached = M.convertToProxy(cachedValue, dryGraph);

M.convertToProxy(expectedValue, wetGraph, true);
const dryExpected = M.convertToProxy(expectedValue, dryGraph);

assert.sameValue(
  dryCached,
  dryObject.accessor,
  "Getting an accessor property through a Membrane proxy should be wrapped"
);

dryObject.accessor = dryExpected;

assert.sameValue(
  dryExpected,
  dryObject.accessor,
  "Setting an accessor property, and then getting it, should work through a Membrane"
);

// In unwrapping, we switched to the wet object graph.
assert.sameValue(
  expectedValue,
  cachedValue,
  "Setting an accessor property should unwrap the property"
);
