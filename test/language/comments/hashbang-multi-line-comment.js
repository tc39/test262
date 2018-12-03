#!/*
these characters should not be considered within a comment
*/
/*---
esid: pending
description: >
    Hashbang comments should not interpret multi-line comments.
info: |
    HashbangComment::
      #! SingleLineCommentChars[opt]

negative:
  phase: parse
  type: SyntaxError
---*/