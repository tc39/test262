#! this comment ends with a Paragraph Separator (U+2029) 0++;

// Copyright (C) 2019 Mike Pennisi. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: pending
description: >
    Hashbang comments are terminated by the first LineTerminator: Paragraph Separator
info: |
    HashbangComment::
      #! SingleLineCommentChars[opt]

    SingleLineCommentChars::
      SingleLineCommentChar SingleLineCommentChars[opt]

    SingleLineCommentChar::
      SourceCharacter but not LineTerminator

    LineTerminator::
      <LF>
      <CR>
      <LS>
      <PS>

    This test relies on the static semantics of UpdateExpression in order to
    verify the precise location that the source text is interpreted as
    executable code. Although throwing a runtime exception may be a more
    explicit mechanism to signal execution, using an early error allows this
    test to verify correctness of ECMAScript parsers.
flags: [raw]
features: [hashbang]
negative:
  phase: parse
  type: ReferenceError
---*/

throw "Test262: This statement should not be evaluated.";
