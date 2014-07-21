// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: NonEscapeSequence is not EscapeCharacter
description: "EscapeCharacter :: SingleEscapeCharacter :: one of b f n r t v"
---*/

//CHECK#bfnrtv
if ("b" === "\b") {
  $ERROR('#b');
}

if ("f" === "\f") {
  $ERROR('#f');
}

if ("n" === "\n") {
  $ERROR('#n');
}

if ("r" === "\r") {
  $ERROR('#r');
}

if ("t" === "\t") {
  $ERROR('#t');
}

if ("v" === "\v") {
  $ERROR('#v');
}
