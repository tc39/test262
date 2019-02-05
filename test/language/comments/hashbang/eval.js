/*---
esid: pending
description: >
    Hashbang comments should be available in Script evaluator contexts.
info: |
    HashbangComment::
      #! SingleLineCommentChars[opt]
features: [hashbang]
---*/

assert.sameValue(eval('#!\n'), undefined);
assert.sameValue(eval('#!\n1'), 1)
assert.sameValue(eval('#!2\n'), undefined);
