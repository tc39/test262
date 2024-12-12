/*---
description: Function.prototype caller and arguments properties use the same ThrowTypeError across realms
features: [cross-realm]
---*/

const otherRealm = $262.createRealm();
const otherFunctionProto = otherRealm.evaluate('Function.prototype');

const mainCallerDesc = Object.getOwnPropertyDescriptor(Function.prototype, "caller");
const otherCallerDesc = Object.getOwnPropertyDescriptor(otherFunctionProto, "caller");

assert.sameValue(mainCallerDesc.get, otherCallerDesc.get, "caller getter should be same across realms");
assert.sameValue(mainCallerDesc.set, otherCallerDesc.set, "caller setter should be same across realms");
