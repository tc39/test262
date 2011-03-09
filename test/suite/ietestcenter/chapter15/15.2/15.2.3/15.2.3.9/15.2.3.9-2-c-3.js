/// Copyright (c) 2009 Microsoft Corporation 
/// 
/// Redistribution and use in source and binary forms, with or without modification, are permitted provided
/// that the following conditions are met: 
///    * Redistributions of source code must retain the above copyright notice, this list of conditions and
///      the following disclaimer. 
///    * Redistributions in binary form must reproduce the above copyright notice, this list of conditions and 
///      the following disclaimer in the documentation and/or other materials provided with the distribution.  
///    * Neither the name of Microsoft nor the names of its contributors may be used to
///      endorse or promote products derived from this software without specific prior written permission.
/// 
/// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR
/// IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS
/// FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE
/// FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
/// LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
/// INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
/// OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF
/// ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.


ES5Harness.registerTest({
    id: "15.2.3.9-2-c-3",

    path: "TestCases/chapter15/15.2/15.2.3/15.2.3.9/15.2.3.9-2-c-3.js",

    description: "Object.freeze - The [[Configurable]] attribute of all own data property of 'O' is set to false while other attributes are unchanged",

    test: function testcase() {

        var obj = {};
        var resultSetFun = false;

        Object.defineProperty(obj, "foo1", {
            value: 10,
            writable: false,
            enumerable: true,
            configurable: true
        });

        function get_func() {
            return 10;
        }

        function set_func() {
            resultSetFun = true;
        }

        Object.defineProperty(obj, "foo2", {
            get: get_func,
            set: set_func,
            enumerable: true,
            configurable: true
        });

        Object.freeze(obj);

        var res1 = obj.hasOwnProperty("foo2");
        delete obj.foo2;
        var res2 = obj.hasOwnProperty("foo2");
        var resultConfigurable = (res1 && res2);

        var resultGetFun = (obj.foo2 === 10);
        obj.foo2 = 12;

        var resultEnumerable = false;
        for (var prop in obj) {
            if (prop === "foo2") {
                resultEnumerable = true;
            }
        }

        var desc1 = Object.getOwnPropertyDescriptor(obj, "foo1");
        var desc2 = Object.getOwnPropertyDescriptor(obj, "foo2");

        var result = resultConfigurable && resultEnumerable && resultGetFun && resultSetFun;

        return dataPropertyAttributesAreCorrect(obj, "foo1", 10, false, true, false) && result &&
            desc1.configurable === false && desc1.writable === false && desc2.configurable === false;

    },

    precondition: function prereq() {
        return fnExists(Object.freeze) && fnExists(Object.defineProperty) && fnExists(Object.getOwnPropertyDescriptor);
    }
});