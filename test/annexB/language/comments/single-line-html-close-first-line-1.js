--> a comment

// Copyright (C) 2024 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-html-like-comments
description: >
    A SingleLineHTMLCloseComment is allowed in the first line
flags: [raw]
info: |
    InputElementHashbangOrRegExp ::
      WhiteSpace
      LineTerminator
      Comment
      CommonToken
      HashbangComment
      RegularExpressionLiteral
      HTMLCloseComment

    HTMLCloseComment ::
      WhiteSpaceSequence[opt] SingleLineDelimitedCommentSequence[opt] --> SingleLineCommentChars[opt]
---*/
