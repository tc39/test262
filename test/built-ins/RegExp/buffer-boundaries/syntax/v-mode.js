// Copyright 2026 Ron Buckton. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Ron Buckton
description: >
  `\A` and `\z` are parsed successfully in v-mode
info: |
  Patterns
  
  Assertion[UnicodeMode, UnicodeSetsMode, NamedCaptureGroups] :
    ...
    [+UnicodeMode] `\` `A`
    [+UnicodeMode] `\` `z`
    ...

esid: sec-patterns
features: [regexp-buffer-boundaries]
---*/

/\A/v;
/\A/vm;
/\A/vmi;
/\A/vs;
/\A/vsi;
/\A/vsm;
/\A/vsmi;
/\z/v;
/\z/vm;
/\z/vmi;
/\z/vs;
/\z/vsi;
/\z/vsm;
/\z/vsmi;
new RegExp("\\A", "v");
new RegExp("\\A", "vm");
new RegExp("\\A", "vmi");
new RegExp("\\A", "vs");
new RegExp("\\A", "vsi");
new RegExp("\\A", "vsm");
new RegExp("\\A", "vsmi");
new RegExp("\\z", "v");
new RegExp("\\z", "vm");
new RegExp("\\z", "vmi");
new RegExp("\\z", "vs");
new RegExp("\\z", "vsi");
new RegExp("\\z", "vsm");
new RegExp("\\z", "vsmi");
