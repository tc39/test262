// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: Testing [[Get]], [[Set]], [[GetOwnPropertyNames]], proto Invarients
includes:
    - runTestCase.js
    - proxyLib.js
---*/

function testcase() {
    for (var i in objectStore) {

        var result;

        var proto = objectStore[i];
        proto.inherited='inherited value';
        var target = Object.create(proto);


        Object.defineProperty(target, 'wcdp', {
            // writable, configurable data property (wcdp)
            value: 1,
            writable: true,
            enumerable: true,
            configurable: true
        });

        Object.defineProperty(target, 'nwncdp', {
            // non-writable, non-configurable data property (nwncdp)
            value: 2,
            writable: false,
            enumerable: false,
            configurable: false
        });

        var proxy = new Proxy(target, {});

        var result = Object.getOwnPropertyDescriptor(proxy, 'non-existent-prop');
        if(result){
            $ERROR('non-existent prop is undefined');
        }

        result = Object.getOwnPropertyDescriptor(proxy, 'wcdp');
        if(result===undefined || result.value!==1 ){
            $ERROR('wcdp is not undefined');
        }

        result = Object.getOwnPropertyDescriptor(proxy, 'nwncdp');
        if(result===undefined || result.value!==2 ){
            $ERROR('nwncdp is not undefined');
        }

        result = Object.getOwnPropertyNames(proxy);
        if(result.indexOf('wcdp')<0 || result.indexOf('nwncdp') <0){
            $ERROR('getOwnPropertyNames should return correct names');
        }

       Object.defineProperty(proxy, 'wcdp',
          {value:1,writable:true,enumerable:false,configurable:true});
       result = Object.getOwnPropertyDescriptor(proxy, 'wcdp');
       if(result.enumerable!==false){
           $ERROR('wcdp should now be non-enumerable');
       }

        // define a new writable, non-configurable data property
        Object.defineProperty(proxy, 'wncdp',
          {value:3,
              writable:true,
              enumerable:true,
              configurable:false});
        result = Object.getOwnPropertyDescriptor(proxy, 'wncdp');
        if(result.configurable!==false){
            $ERROR('wncdp should be non-configurable');
        }

        // delete wcdp
        result = delete proxy.wcdp;
        if(result!==true){
            $ERROR('wcdp should be deleted');
        }
        result = Object.getOwnPropertyDescriptor(proxy, 'wcdp');
        if(result){
            $ERROR('wcdp should be deleted');
        }

        result = [];
        // enumerates wncdp, inherited
        for (var name in proxy) { result.push(name); }
        if(result.indexOf('inherited')<0){
            $ERROR('inherited properties should be enumerated');
        }

        result = 'non-existent' in proxy;
        if(result!==false){
            $ERROR('non-existent should not be enumerated');
        }

        result = 'nwncdp' in proxy;
        if(result!==true){
            $ERROR('nwncdp should be enumerated');
        }
        result = 'inherited' in proxy;
        if(result!==true){
            $ERROR('inherited should be enumerated');
        }
        result = ({}).hasOwnProperty.call(proxy, 'inherited');
        if(result!==false){
            $ERROR('inherited is not a own property');
        }

        result = ({}).hasOwnProperty.call(proxy, 'nwncdp');
        if(result!==true){
            $ERROR('nwncdp is own property');
        }

        if(proxy.nwncdp!==2){
            $ERROR('incorrect value for nwncdp');
        }

        try { proxy.nwncdp = 42; } catch(e) {} // may throw in strict-mode

        if(proxy.nwncdp!==2){
            $ERROR('incorrect value for nwncdp');
        }

        result = Object.keys(proxy); // wncdp
        if (result.indexOf('wncdp') < 0) {
            $ERROR('wncdp should be reported by Object.keys');
        }


    }
    return true;

}
runTestCase(testcase);
