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


/*
Refer 11.1.5; 
The production
PropertyNameAndValueList : PropertyNameAndValueList , PropertyAssignment 
5.Call the [[DefineOwnProperty]] internal method of obj with arguments propId.name, propId.descriptor, and false.
*/

ES5Harness.registerTest({
    id: "11.1.5_4-5-1",

    path: "TestCases/chapter11/11.1/11.1.5/11.1.5_4-5-1.js",

    description: "Object initialization using PropertyNameAndValueList (PropertyNameAndValueList , PropertyAssignment) when property (read-only) exists in Object.prototype (Step 5)",

    test: function testcase() {
        try {
            Object.defineProperty(Object.prototype, "prop2", {
                value: 100,
                writable: false,
                configurable: true
            });

            var obj = { prop1: 101, prop2: 12 };

            return obj.hasOwnProperty("prop2");
        } finally {
            delete Object.prototype.prop2;
        }
    },

    precondition: function prereq() {
        return fnExists(Object.defineProperty);
    }
});
