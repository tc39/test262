/*---
description: Function.prototype caller and arguments properties are accessor properties with ThrowTypeError
esid: sec-function.prototype.caller
info: |
    Function instances do not inherit the "caller" and "arguments" accessors
    from Function.prototype. The accessors exist only on Function.prototype.
---*/

const callerDesc = Object.getOwnPropertyDescriptor(Function.prototype, "caller");
const argumentsDesc = Object.getOwnPropertyDescriptor(Function.prototype, "arguments");

assert.sameValue(typeof callerDesc.get, "function");
assert.sameValue(typeof callerDesc.set, "function");
assert.sameValue(callerDesc.get, callerDesc.set, "caller getter/setter should be same function");

assert.sameValue(typeof argumentsDesc.get, "function");
assert.sameValue(typeof argumentsDesc.set, "function");
assert.sameValue(argumentsDesc.get, argumentsDesc.set, "arguments getter/setter should be same function");
