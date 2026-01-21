// Copyright (C) 2020 Claude Pache. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
description: >
   func.arguments and func.caller throw a TypeError exception when the realm
    of the receiver and the realm of the getter do not match.
flags: [noStrict]
---*/

var crossRealmFunc = $262.createRealm().global.Function("")
Object.setPrototypeOf(crossRealmFunc, Function.prototype)

for (let property of ['caller', 'arguments']) {
    assert(property in crossRealmFunc, `func.${property} should exist.`)
    assert(!crossRealmFunc.hasOwnProperty(property), `func.${property} should not be an own property.`)
    assert.throws(
        TypeError
      , _ => crossRealmFunc[property]
      , `func.${property} must throw a TypeError when its .${property} getter is from another realm.`
    )
}
