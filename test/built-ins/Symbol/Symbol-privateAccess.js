// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: >
    Testing Symbol act as private data and are accessible with
    getOwnPropertySymbols
includes: [runTestCase.js]
---*/

class cl{
    constructor(){
        this[Symbol('private')]='private data';
        this['public']='public data';
    }

}

function testcase() {

    var c = new cl();
    for(var i in c){
        if(c[i]==='private data'){
            $ERROR("Symbols don't get enumerated in for-in");
        }
    }
    var props= Object.getOwnPropertyNames(c);
    for(var i in props){
        if(c[props[i]]==='private data'){
            $ERROR("Symbols don't get enumerated in getOwnPropertyNames");
        }
    }

    var sym= Object.getOwnPropertySymbols(c)[0];

    if(c[sym]!=='private data'){
        $ERROR('Symbols should be accessible with getOwnPropertySymbols');
    }

    return true;

}
runTestCase(testcase);
