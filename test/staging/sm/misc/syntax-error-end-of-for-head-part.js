/*
 * Any copyright is dedicated to the Public Domain.
 * http://creativecommons.org/licenses/publicdomain/
 */

/*---
flags:
  - noStrict
description: |
  Syntax errors at the end of |for| statement header parts shouldn't cause crashes
esid: pending
---*/

function checkSyntaxError(str)
{
  try
  {
    var f = Function("for(w in\\");
    throw new Error("didn't throw, returned " + f);
  }
  catch (e)
  {
    assert.sameValue(e instanceof SyntaxError, true,
             "expected SyntaxError, got " + e);
  }
}

checkSyntaxError("for(var w in \\");
checkSyntaxError("for(w in \\");
checkSyntaxError("for(var w\\");
checkSyntaxError("for(w\\");
checkSyntaxError("for(var w;\\");
checkSyntaxError("for(w;\\");
checkSyntaxError("for(var w; w >\\");
checkSyntaxError("for(w; w >\\");
checkSyntaxError("for(var w; w > 3;\\");
checkSyntaxError("for(w; w > 3;\\");
checkSyntaxError("for(var w; w > 3; 5\\");
checkSyntaxError("for(w; w > 3; 5\\");
checkSyntaxError("for(var w; w > 3; 5foo");
checkSyntaxError("for(w; w > 3; 5foo");
