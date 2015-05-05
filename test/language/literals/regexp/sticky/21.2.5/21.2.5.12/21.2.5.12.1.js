// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
author: Kunal Pathak
description: "'y' flag is honored with RegExp.prototype.sticky"
---*/

//

try {
    var re1 = /^\d/gyi;
    var re2 = new RegExp("\W.*$", "yg");
    var re3 = new RegExp("\D.*$", "g");
    var answer = re1.sticky && re2.sticky && !re3.sticky;
    if (!answer) {
        $ERROR("get RegExp.prototype.sticky not reflecting correct value.");
    }
}
catch (error) {
    $ERROR("RegExp.prototype.sticky not present on RegExp instance.");
}
