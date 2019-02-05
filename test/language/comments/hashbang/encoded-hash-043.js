\043!
/*---
esid: pending
description: >
    Hashbang comments should not be allowed to have encoded characters \043
info: |
    HashbangComment::
      #! SingleLineCommentChars[opt]
flags: [raw]
negative:
  phase: parse
  type: SyntaxError
features: [hashbang]
---*/
