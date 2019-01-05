// Copyright (C) 2019 Alexander J. Vincent. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
 description: Ensure wrapping and unwrapping of object prototypes is correct.
 esid: pending
 features: [Proxy,WeakMap,Reflect,Map]
 includes: [integration-Membrane.js]
---*/

const M = new Membrane();
const wetGraph = M.getObjectGraph("wet", true);
const dryGraph = M.getObjectGraph("dry", true);

const rawObject = function() {};
rawObject.prototype = {
  toString: () => "object prototype (original)",
};
const wetObject = M.convertToProxy(rawObject, wetGraph, true);
const dryObject = M.convertToProxy(wetObject, dryGraph);

/* Ideally, this wouldn't be necessary beforehand... but I think the sample
 * Membrane implementation in harness/integration-Membrane.js would require it.
 */
M.convertToProxy(wetObject.prototype, wetGraph, true);
const dryProto = M.convertToProxy(wetObject.prototype, dryGraph);

const dryInstance = new dryObject();
assert.sameValue(
  dryProto,
  Reflect.getPrototypeOf(dryInstance)
);
// Inheritance test
assert.sameValue(
  "object prototype (original)",
  dryInstance.toString(),
  "object prototype inheritance works before modification"
);
assert.sameValue(
  false,
  Reflect.ownKeys(dryInstance).includes("toString"),
  "toString should be on the proxy's prototype, not the proxy itself."
);

const newProto = M.convertToProxy({
  toString: () => "object prototype (modified)",
}, wetGraph, true);
const dryNewProto = M.convertToProxy(newProto, dryGraph);

assert.sameValue(
  true,
  Reflect.setPrototypeOf(dryInstance, dryNewProto),
  "Setting a prototype works"
);
// Inheritance test
assert.sameValue(
  "object prototype (modified)",
  dryInstance.toString(),
  "object prototype inheritance works after modification"
);
assert.sameValue(
  false,
  Reflect.ownKeys(dryInstance).includes("toString"),
  "toString should be on the proxy's prototype, not the proxy itself."
);
