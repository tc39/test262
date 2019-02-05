#\x21
/*---
esid: pending
description: >
    Hashbang comments should not be allowed to have encoded characters \x21
info: |
    HashbangComment::
      #! SingleLineCommentChars[opt]
flags: [raw]
negative:
  phase: parse
  type: SyntaxError
features: [hashbang]
---*/
