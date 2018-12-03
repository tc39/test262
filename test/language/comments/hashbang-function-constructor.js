/*---
esid: pending
description: >
    Hashbang comments should not be allowed in function evaluator contexts.
info: |
    HashbangComment::
      #! SingleLineCommentChars[opt]
flags: [module]
---*/
const AsyncFunction = (async function (){}).constructor;
const GeneratorFunction = (function *(){}).constructor;
const AsyncGeneratorFunction = (async function *(){}).constructor;
for (ctor of [
  Function,
  AsyncFunction,
  GeneratorFunction,
  AsyncGeneratorFunction,
]) {
  assert.throws(SyntaxError, () => ctor('#!\n_',''));
  assert.throws(SyntaxError, () => ctor('#!\n_'));
  assert.throws(SyntaxError, () => new ctor('#!\n_',''));
  assert.throws(SyntaxError, () => new ctor('#!\n_'));
}
