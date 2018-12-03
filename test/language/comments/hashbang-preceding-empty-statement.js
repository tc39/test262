;#!
/*---
esid: pending
description: >
    Hashbang comments should only be allowed at the start of source texts and should not be preceded by empty statements.
info: |
    HashbangComment::
      #! SingleLineCommentChars[opt]

negative:
  phase: parse
  type: SyntaxError
---*/