// Copyright 2015 Cubane Canada, Inc.  All rights reserved.
// See LICENSE for details.

/*---
info: >
 ES6 spec 'get [Symbol.species]'
es6id: 6.1.5.1
author: Sam Mikes
description: Symbol.species getters have defined names
includes: 
  - propertyHelper.js
---*/

function getGetterName(obj, name) {
    var getter = Object.getOwnPropertyDescriptor(obj, Symbol.species).get;
    return getter && getter.name;
}

assert.sameValue(getGetterName(Array, Symbol.species), "get [Symbol.species]");
assert.sameValue(getGetterName(Map, Symbol.species), "get [Symbol.species]");
assert.sameValue(getGetterName(Promise, Symbol.species), "get [Symbol.species]");
assert.sameValue(getGetterName(RegExp, Symbol.species), "get [Symbol.species]");
assert.sameValue(getGetterName(Set, Symbol.species), "get [Symbol.species]");

