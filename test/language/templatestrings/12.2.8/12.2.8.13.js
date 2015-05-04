// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: >
    [[Substitutions]] Usage of different types of objects inside
    string templates
---*/

var array = [101, 102, 103];
var output = `${new Number(100)},${array}`;
if (output !== "100,101,102,103") {
    $ERROR('[Substitutions] Array concatenation with number Expected : 100,101,102,103 || Actual : ' + output);
}

if (typeof document !== 'undefined') {
    output = `${document.createElement("button").appendChild(document.createTextNode("click"))}`;
    if (output !== "[object Text]") {
        $ERROR('[substitutions] usage of dom elements inside string template failed expected : [object text] || actual : ' + output);
    }
}

output = `${/d(\d+)d/g.exec("abcd8979077745d464645dgrtert")}`;
if (output !== "d8979077745d,8979077745") {
    $ERROR('[Substitutions] Usage of regex exec inside string templates failed Expected : d8979077745d,8979077745 || Actual : ' + output);
}
