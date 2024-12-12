/*---
description: Function properties behavior in strict vs non-strict contexts
flags: [noStrict]
---*/

function nonStrictFunc() {
    return nonStrictFunc.caller;
}

function strictFunc() {
    return strictFunc.caller;
}

assert(!Object.hasOwnProperty.call(nonStrictFunc, "caller"), "non-strict function should not have own caller property");
assert(!Object.hasOwnProperty.call(strictFunc, "caller"), "strict function should not have own caller property");

assert.throws(TypeError, () => nonStrictFunc(), "accessing caller should throw");
assert.throws(TypeError, () => strictFunc(), "accessing caller should throw in strict mode");
