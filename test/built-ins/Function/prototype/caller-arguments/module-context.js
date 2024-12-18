/*---
description: Function properties behave consistently in module context
flags: [module]
---*/

function normalFunc() {}
function strictFunc() { }

assert(!Object.hasOwnProperty.call(normalFunc, "caller"), "normal function should not have caller");
assert(!Object.hasOwnProperty.call(strictFunc, "caller"), "strict function should not have caller");
assert(!Object.hasOwnProperty.call(normalFunc, "arguments"), "normal function should not have arguments");
assert(!Object.hasOwnProperty.call(strictFunc, "arguments"), "strict function should not have arguments");
