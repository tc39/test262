// Copyright 2015 Microsoft Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: invoke arrow function using apply - 'this' is lexically bound
author: Nikhil Suryanarayanan
---*/

/// Copyright (c) 2013 Microsoft Corporation
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
 * @description invoke arrow function using apply - 'this' is lexically bound
 * @author Nikhil Suryanarayanan
 */


 var b = {
    method1: (arg) => {this.x = arg},
    method2: (arg) => {return (arg) => {this.y = arg}},
    method3: function(arg) {return (arg) => {this.z = arg}}
 }

 b.method1.apply(null, ["arg1"]);
 b.method2().apply(null, ["arg2"]);
 b.method3().apply(null, ["arg3"]);

 if(this.x !== "arg1" || this.y !== "arg2" || b.z !== "arg3")
    $ERROR('this binding was incorrect. Calling arrownFn.apply({}, "arg")');
