// Copyright 2026 Ron Buckton. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Ron Buckton
description: >
  `\A`, `\z`, and `\Z` are parsed successfully in u-mode
info: |
  Patterns
  
  Assertion[UnicodeMode, UnicodeSetsMode, NamedCaptureGroups] :
    ...
    [+UnicodeMode] `\` `A`
    [+UnicodeMode] `\` `z`
    [+UnicodeMode] `\` `Z`
    ...

esid: sec-patterns
features: [regexp-buffer-boundaries]
---*/

/\A/u;
/\A/um;
/\A/umi;
/\A/us;
/\A/usi;
/\A/usm;
/\A/usmi;
/\z/u;
/\z/um;
/\z/umi;
/\z/us;
/\z/usi;
/\z/usm;
/\z/usmi;
/\Z/u;
/\Z/um;
/\Z/umi;
/\Z/us;
/\Z/usi;
/\Z/usm;
/\Z/usmi;
new RegExp("\\A", "u");
new RegExp("\\A", "um");
new RegExp("\\A", "umi");
new RegExp("\\A", "us");
new RegExp("\\A", "usi");
new RegExp("\\A", "usm");
new RegExp("\\A", "usmi");
new RegExp("\\z", "u");
new RegExp("\\z", "um");
new RegExp("\\z", "umi");
new RegExp("\\z", "us");
new RegExp("\\z", "usi");
new RegExp("\\z", "usm");
new RegExp("\\z", "usmi");
new RegExp("\\Z", "u");
new RegExp("\\Z", "um");
new RegExp("\\Z", "umi");
new RegExp("\\Z", "us");
new RegExp("\\Z", "usi");
new RegExp("\\Z", "usm");
new RegExp("\\Z", "usmi");
