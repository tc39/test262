// Copyright (C) 2019 Alexander J. Vincent. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
 description: Exercise the conversion, via WeakMap, of an object into a Proxy and back.
 esid: pending
 features: [Proxy,WeakMap,Reflect,Map]
 includes: [integration-Membrane.js]
---*/

const M = new Membrane();
const wetGraph = M.getObjectGraph("wet", true);
const dryGraph = M.getObjectGraph("dry", true);

const rawObject = {toString: () => "membrane object"};
const wetObject = M.convertToProxy(rawObject, wetGraph, true);
assert.sameValue(
  wetObject,
  rawObject,
  "M.convertToProxy should've returned the same value for originals"
);

assert.sameValue(
  M.convertToProxy(wetObject, wetGraph),
  rawObject,
  "M.convertToProxy is violating identity"
);

const dryObject = M.convertToProxy(wetObject, dryGraph);
assert(Boolean(dryObject), "M.convertToProxy should've returned a Proxy");
assert.notSameValue(
  dryObject,
  rawObject,
  "M.convertToProxy should've returned a Proxy for non-originals"
);

assert.sameValue(
  M.convertToProxy(dryObject, wetGraph),
  wetObject,
  "M.convertToProxy should get back the original value when going to the original graph"
);

assert.sameValue(
  dryObject.toString(),
  "membrane object"
);
