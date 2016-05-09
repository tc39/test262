// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-html-like-comments
es6id: B1.3
description: Optional HTMLCloseComment following MultiLineComment
info: |
    Comment ::
      MultiLineComment
      SingleLineComment
      SingleLineHTMLOpenComment
      SingleLineHTMLCloseComment
      SingleLineDelimitedComment

    MultiLineComment ::
      /* FirstCommentLine[opt] LineTerminator MultiLineCommentChars[opt] * / HTMLCloseComment[opt]

    HTMLCloseComment ::
      WhiteSpaceSequence[opt] SingleLineDelimitedCommentSequence[opt] --> SingleLineCommentChars[opt]
negative: Test262Error
---*/

var counter = 0;
/*
*/-->
counter += 1;

/*
*/-->the comment extends to these characters
counter += 1;

/* optional FirstCommentLine
*/-->the comment extends to these characters
counter += 1;

/*
optional
MultiLineCommentChars */-->the comment extends to these characters
counter += 1;

/*
*/ /* optional SingleLineDelimitedCommentSequence */-->the comment extends to these characters
counter += 1;

/*
*/ /**/ /* second optional SingleLineDelimitedCommentSequence */-->the comment extends to these characters
counter += 1;

// Because this test concerns the interpretation of non-executable character
// sequences within ECMAScript source code, special care must be taken to
// ensure that executable code is evaluated as expected.
//
// Express the intended behavior by intentionally throwing an error; this
// guarantees that test runners will only consider the test "passing" if
// executable sequences are correctly interpreted as such.
if (counter === 6) {
  throw new Test262Error();
}
