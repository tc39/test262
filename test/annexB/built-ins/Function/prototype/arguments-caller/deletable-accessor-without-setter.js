// Copyright (C) 2020 Claude Pache. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
description: >
    Function.prototype.arguments and Function.prototype.caller
    must be deletable accessor properties without setter.
---*/

for (let property of ['caller', 'arguments']) {
    var desc = Object.getOwnPropertyDescriptor(Function.prototype, property)
    assert(desc !== undefined, `Function.prototype.${property} must exist as own property`)
    assert(desc.configurable === true, `Function.prototype.${property} must be configurable`)
    assert(desc.enumerable === false, `Function.prototype.${property} must be non-enumerable`)
    assert(!('value' in desc), `Function.prototype.${property} must be an accessor property`)
    assert(desc.set === undefined, `Function.prototype.${property} must have no setter`)
    assert(typeof desc.get === "function", `Function.prototype.${property} must have a getter`)
    delete desc[property]
    var newDesc = Object.getOwnPropertyDescriptor(Function.prototype, property)
    assert(newDesc === undefined, `Function.prototype.${property} must be deletable`)
}
