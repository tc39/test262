// Copyright (C) 2019 Alexander J. Vincent. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
 description: Membrane proxies must correctly recreate a tree of properties from the objects they emulate.  This includes property cycles.
 esid: pending
 features: [Proxy,WeakMap,Reflect,Map]
 includes: [integration-Membrane.js]
---*/

const M = new Membrane();
const wetGraph = M.getObjectGraph("wet", true);
const dryGraph = M.getObjectGraph("dry", true);

const rawObject = {
  toString: () => "rawObject",
  son: {
    toString: () => "son",
    daughter: {
      toString: () => "daughter"
    }
  }
};
rawObject.son.daughter.grandParent = rawObject;

const wetObject = M.convertToProxy(rawObject, wetGraph, true);
const dryObject = M.convertToProxy(wetObject, dryGraph);

assert.sameValue(
  dryObject.son.daughter.grandParent,
  dryObject,
  "Looking up a cycle of properties through a Membrane proxy should work"
);
