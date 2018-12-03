"use strict"
#!
/*---
esid: pending
description: >
    Hashbang comments should only be allowed at start of source texts and should not be preceded by DirectivePrologues.
info: |
    HashbangComment::
      #! SingleLineCommentChars[opt]

negative:
  phase: parse
  type: SyntaxError
---*/