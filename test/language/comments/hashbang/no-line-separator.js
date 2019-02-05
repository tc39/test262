/*---
esid: pending
description: >
    Hashbang comments should not require a newline afterwards
info: |
    HashbangComment::
      #! SingleLineCommentChars[opt]
features: [hashbang]
---*/

assert.sameValue(eval('#!'), undefined);
