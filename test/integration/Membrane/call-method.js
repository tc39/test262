// Copyright (C) 2019 Alexander J. Vincent. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
 description: Call a method of a Membrane proxy.
 esid: pending
 features: [Proxy,WeakMap,Reflect,Map]
 includes: [integration-Membrane.js]
---*/

const M = new Membrane();
const wetGraph = M.getObjectGraph("wet", true);
const dryGraph = M.getObjectGraph("dry", true);

let thisObj, firstArg;

const rawObject = {
  toString: () => "membrane object",
  property1: { toString: () => "property1" },
  retval: { toString: () => "retval" },
  method: function(arg) {
    thisObj = this;
    firstArg = arg;
    return this.retval;
  },
};
const wetObject = M.convertToProxy(rawObject, wetGraph, true);
const dryObject = M.convertToProxy(wetObject, dryGraph);

const methodCall = dryObject.method(dryObject.property1);
assert.sameValue(
  dryObject.retval,
  methodCall
);

// In unwrapping, we switched to the wet object graph.
assert.sameValue(
  wetObject,
  thisObj
);

assert.sameValue(
  wetObject.property1,
  firstArg
);
