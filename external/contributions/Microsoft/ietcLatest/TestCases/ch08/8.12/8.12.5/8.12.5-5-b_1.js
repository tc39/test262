/// Copyright (c) 2011 Microsoft Corporation 
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

/**
 * @path ch08/8.12/8.12.5/8.12.5-5-b_1.js
 * @description Changing the value of an accessor property should not affect it's property descriptor attributes.
 */


function testcase() {
    var tempObj = {};
    
    Object.defineProperty(tempObj, "reduce", { get: function() {return 456;}, enumerable:false, set: function() {;}});
    var origReduce = tempObj.reduce;
    var origDesc = Object.getOwnPropertyDescriptor(tempObj, "reduce");

    var newDesc;
    
    try {
        tempObj.reduce = 123;
        newDesc = Object.getOwnPropertyDescriptor(tempObj, "reduce");
        var descArray = [origDesc, newDesc];
        
        for (var j in descArray) {
            for (var i in descArray[j]) {
                if (origDesc[i]!==newDesc[i]) {
                    return false;
                }
            }
        }
        return tempObj.reduce===456;        
    
    } finally {
        tempObj.reduce = origReduce;
    }
}
runTestCase(testcase);
