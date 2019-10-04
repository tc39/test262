/*---
esid: pending
features: [optional-chaining]
info: |
  Calling a method using the optional-chaining syntax.
---*/

let a = {
  methodExists() {
    return 5;
  }
};

assert(a.methodExists ?.() === 5, 'Should call method if it exists');
assert(a.methodDoesNotExist ?.() === undefined, 'Should return `undefined` for missing methods');
