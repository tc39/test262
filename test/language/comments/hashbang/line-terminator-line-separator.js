#! this comment ends with a Line Separator (U+2028) throw new EvalError();

// Copyright (C) 2019 Mike Pennisi. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: pending
description: >
    Hashbang comments are terminated by the first LineTerminator: Line Separator
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

    This test raises an EvalError to verify the precise location that source
    text is interpreted as executable code.
flags: [raw]
features: [hashbang]
negative:
  phase: runtime
  type: EvalError
---*/
