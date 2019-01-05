// Copyright (C) 2019 Alexander J. Vincent. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
 description: Membrane proxies must return the same property on different lookups to the same name.
 esid: pending
 features: [Proxy,WeakMap,Reflect,Map]
 includes: [integration-Membrane.js,propertyHelper.js]
---*/

const M = new Membrane();
const wetGraph = M.getObjectGraph("wet", true);
const dryGraph = M.getObjectGraph("dry", true);

const rawObject = {
  toString: () => "rawObject",
};
const son = {
  toString: () => "son"
};

Reflect.defineProperty(rawObject, "son", {
  value: son,
  writable: false,
  enumerable: true,
  configurable: false
});

const wetObject = M.convertToProxy(rawObject, wetGraph, true);
const dryObject = M.convertToProxy(wetObject, dryGraph);

const wrappedSon = dryObject.son;
assert.sameValue(
  wrappedSon,
  dryObject.son,
  "Non-configurable, non-writable properties should respect the identity property of Membranes"
);

const wrappedDesc = {
  value: wrappedSon,
  writable: false,
  enumerable: true,
  configurable: false
};

verifyProperty(dryObject, "son", wrappedDesc);
