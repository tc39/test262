/*---
esid: pending
description: >
    Hashbang comments should be available in Script evaluator contexts.
info: |
    HashbangComment::
      #! SingleLineCommentChars[opt]
---*/

eval('#!\n');
