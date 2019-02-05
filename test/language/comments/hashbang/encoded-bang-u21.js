#\u{21}
/*---
esid: pending
description: >
    Hashbang comments should not be allowed to have encoded characters \u{21}
info: |
    HashbangComment::
      #! SingleLineCommentChars[opt]
flags: [raw]
negative:
  phase: parse
  type: SyntaxError
features: [hashbang]
---*/
