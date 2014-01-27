/*
Copyright (c) 2014, nebu@nebupookins.net All rights reserved. Redistribution
and use in source and binary forms, with or without modification, are permitted
provided that the following conditions are met:

1. Redistributions of source code must retain the above copyright notice, this
   list of conditions and the following disclaimer.
2. Redistributions in binary form must reproduce the above copyright notice,
   this list of conditions and the following disclaimer in the documentation
   and/or other materials provided with the distribution.
3. Neither the name of the copyright holder nor the names of its contributors
   may be used to endorse or promote products derived from this software without
   specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR
ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
(INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON
ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
(INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/

/*
 * Test for Object.assign, from 19.1.2.1 of the spec
 * https://people.mozilla.org/~jorendorff/es6-draft.html#sec-object.assign
 *
 * @author Nebu (nebupookins@gmail.com)
 */
(function () {
	"use strict";

	function assert(claim, message) {
		if (claim == false) {
			$ERROR(message);
		}
	}

	assert(typeof Object.assign === "function", "Object.assign should be a function.");

	// Tests the happy case
	(function () {
		var a = {foo: "bar"};
		var b = {};
		var result = Object.assign(b, a);
		assert(b.foo === "bar", "Object.assign should have copied over a property");
		assert(Object.keys(b).length === 1, "Object.assign should not have created properties out of thin air.");
		assert(result === b, "Object.assign should return the target.");
	})();

	//Tests overwriting works
	(function () {
		var a = {foo: "buzz"};
		var b = {foo: "bar"};
		var result = Object.assign(b, a);
		assert(b.foo === "buzz", "Object.assign should have overwritten a property");
		assert(Object.keys(b).length === 1, "Object.assign should not have created properties out of thin air.");
		assert(result === b, "Object.assign should return the target.");
	})();

	//Tests non-overwritten fields don't get overwritten.
	(function () {
		var a = {foo: "buzz"};
		var b = {foo: "bar", fizz: "else"};
		var result = Object.assign(b, a);
		assert(b.foo === "buzz", "Object.assign should have overwritten a property");
		assert(b.fizz === "else", "Object.assign should have not overwritten a property");
		assert(Object.keys(b).length === 2, "Object.assign should not have created properties out of thin air.");
		assert(result === b, "Object.assign should return the target.");
	})();

	//Step 1: "Let to be ToObject(target)." should throw a TypeError if target is undefined.
	(function (undefined) {
		var a = {foo: "buzz"};
		try {
			Object.assign(undefined, a);
			$ERROR("Object.assign should throw a TypeError if provided an undefined target, but it completed successfully.");
		} catch (e) {
			if (e instanceof TypeError) {
				//This is the expected behaviour
			} else {
				throw e;
			}
		}
	})();

	//Step 1: "Let to be ToObject(target)." should throw a TypeError if target is null.
	(function () {
		var a = {foo: "buzz"};
		try {
			Object.assign(null, a);
			$ERROR("Object.assign should throw a TypeError if provided an undefined target, but it completed successfully.");
		} catch (e) {
			if (e instanceof TypeError) {
				//This is what we're expecting
			} else {
				throw e;
			}
		}
	})();

	//Step 1: "Let to be ToObject(target)." should convert a boolean to an object of type Boolean.
	(function () {
		var source = {foo: "buzz"};
		var target = true;
		var result = Object.assign(target, source);
		assert(typeof result === 'object', "Object.assign should have converted the boolean into an Object of type Boolean; instead, it returned a " + (typeof result));
		assert(result instanceof Boolean, "Object.assign should have converted the boolean into an Object of type Boolean; instead, it returned a " + result.constructor)
		assert(result.foo === source.foo, "Object.assign should have copied over a property");
	})();

	//Step 1: "Let to be ToObject(target)." should convert a number to an object of type Number.
	(function () {
		var source = {foo: "buzz"};
		var target = 3.1415;
		var result = Object.assign(target, source);
		assert(typeof result === 'object', "Object.assign should have converted the number into an Object of type Number; instead, it returned a " + (typeof result));
		assert(result instanceof Number, "Object.assign should have converted the number into an Object of type Number; instead, it returned a " + result.constructor)
		assert(result.foo === source.foo, "Object.assign should have copied over a property");
	})();

	//Step 1: "Let to be ToObject(target)." should convert a string to an object of type String.
	(function () {
		var source = {foo: "buzz"};
		var target = "hello";
		var result = Object.assign(target, source);
		assert(typeof result === 'object', "Object.assign should have converted the string into an Object of type String; instead, it returned a " + (typeof result));
		assert(result instanceof String, "Object.assign should have converted the string into an Object of type String; instead, it returned a " + result.constructor)
		assert(result.foo === source.foo, "Object.assign should have copied over a property");
	})();

	//Step 1: "Let to be ToObject(target)." should return the original object, when given an object.
	(function () {
		var source = {foo: "buzz"};
		var target = {};
		var result = Object.assign(target, source);
		assert(result === target, "Object.assign should return the original object, when given an object.");
	})();

	//Step 3: "Let from be ToObject(source)." should throw a TypeError if source is undefined.
	(function (undefined) {
		var source = undefined;
		var target = {};
		try {
			Object.assign(target, source);
			$ERROR("Object.assign should throw a TypeError if provided an undefined source, but it completed successfully.");
		} catch (e) {
			if (e instanceof TypeError) {
				//this is what we're expecting
			} else {
				throw e;
			}
		}
	})();

	//Step 3: "Let from be ToObject(source)." should throw a TypeError if source is undefined.
	(function () {
		var source = undefined;
		var target = {};
		try {
			Object.assign(target, source);
			$ERROR("Object.assign should throw a TypeError if provided an undefined source, but it completed successfully.");
		} catch (e) {
			if (e instanceof TypeError) {
				//This is the expected behaviour
			} else {
				throw e;
			}
		}
	})();

	//Step 9.d.iv: "If desc is an abrupt completion, then", should throw an exception if evaluating a property from source throws an exception
	(function () {
		var errMessage = "Fake error for test.";
		var source = {a: "foo", get b() { throw new Error(errMessage); }};
		var target = {};
		try {
			Object.assign(target, source);
			$ERROR("Object.assign should throw an exception if evaluating a property from source throws an exception, but it completed successfully.");
		} catch (e) {
			if (e instanceof Error && e.message === errMessage) {
				//This is the expected behaviour
			} else {
				throw e;
			}
		}
	})();

	//Step 9.d: If a property fails to copy on read, the other properties should still copy.
	(function () {
		/*
		 * The idea behind the implementation here is that we defined 3 properties,
		 * but we don't know in what order those properties will be read. That said,
		 * we WANT the first property read to succeed, the second to fail, and the
		 * third to succeed.
		 */
		var errMessage = "Fake error for test.";
		var propertyBehaviourMapping = {};
		var returnsFooBehaviour = function () { return "foo"; };
		var throwsExceptionBehaviour = function () { throw new Error(errMessage); };
		var returnsBarBehaviour = function () { return "bar"; };
		var behaviours = [
			returnsFooBehaviour,
			throwsExceptionBehaviour,
			returnsBarBehaviour
		];
		function associateNextBehaviour(key) {
			if (! propertyBehaviourMapping[key]) {
				var behaviourKeys = Object.keys(propertyBehaviourMapping);
				propertyBehaviourMapping[key] = behaviours[behaviourKeys.length];
			}
		}
		
		var source = {
			get a() {
				associateNextBehaviour("a");
				return propertyBehaviourMapping.a();
			} , get b() {
				associateNextBehaviour("b");
				return propertyBehaviourMapping.b();
			} , get c() {
				associateNextBehaviour("c");
				return propertyBehaviourMapping.c();
			}
		};
		var target = {};
		try {
			Object.assign(target, source);
			$ERROR("Object.assign should have thrown an exception, but it completed successfully.");
		} catch (e) {
			if (e instanceof Error && e.message === errMessage) {
				//This is the expected behaviour
			} else {
				throw e;
			}
			assert(Object.keys(propertyBehaviourMapping).length === 3, "Object.assign should have examined exactly 3 properties.");
			assert(typeof propertyBehaviourMapping.a === 'function', "Object.assign should have examined property a.");
			assert(typeof propertyBehaviourMapping.b === 'function', "Object.assign should have examined property b.");
			assert(typeof propertyBehaviourMapping.c === 'function', "Object.assign should have examined property c.");
			['a', 'b', 'c'].forEach(function(key) {
				if (propertyBehaviourMapping[key] === returnsFooBehaviour) {
					assert(target[key] === "foo", "Object.assign should have copied the first property over.");
				} else if (propertyBehaviourMapping[key] === throwsExceptionBehaviour) {
					assert(target[key] === undefined, "Object.assign should not have created a property out of nothing.");
				} else if (propertyBehaviourMapping[key] === returnsBarBehaviour) {
					assert(target[key] === "bar", "Object.assign should have copied a property over even after an exception was thrown.");
				} else {
					$ERROR("propertyBehaviourMapping for " + key + " was " + propertyBehaviourMapping[key]);
				}
			});
			var targetKeys = Object.keys(target);
			assert(targetKeys.length <= 2, "Object.assign should not have created a property out of nothing.");
			assert(targetKeys.length >= 2, "Object.assign should have created both properties.");
		}
	})();

	//Step 9.d: If multiple properties fails to copy on read, the exception thrown is the first one encountered.
	(function () {
		/*
		 * The idea behind the implementation here is that we defined 3 properties,
		 * but we don't know in what order those properties will be read. That said,
		 * we WANT the first property read to succeed, the second to fail with exception 1, and the
		 * third to fail with exception 2.
		 */
		var errMessage1 = "Fake error for test 1.";
		var errMessage2 = "Fake error for test 2.";
		var propertyBehaviourMapping = {};
		var returnsFooBehaviour = function () { return "foo"; };
		var throwsException1Behaviour = function () { throw new Error(errMessage1); };
		var throwsException2Behaviour = function () { throw new Error(errMessage2); };
		var behaviours = [
			returnsFooBehaviour,
			throwsException1Behaviour,
			throwsException2Behaviour
		];
		function associateNextBehaviour(key) {
			if (! propertyBehaviourMapping[key]) {
				var behaviourKeys = Object.keys(propertyBehaviourMapping);
				propertyBehaviourMapping[key] = behaviours[behaviourKeys.length];
			}
		}
		
		var source = {
			get a() {
				associateNextBehaviour("a");
				return propertyBehaviourMapping.a();
			} , get b() {
				associateNextBehaviour("b");
				return propertyBehaviourMapping.b();
			} , get c() {
				associateNextBehaviour("c");
				return propertyBehaviourMapping.c();
			}
		};
		var target = {};
		try {
			Object.assign(target, source);
			$ERROR("Object.assign should have thrown an exception, but it completed successfully.");
		} catch (e) {
			if (e instanceof Error && e.message === errMessage1) {
				//This is the expected behaviour
			} else if (e instanceof Error && e.message === errMessage2) {
				$ERROR("Object.assign should have thrown the first exception it encountered, but it threw the second (last) one instead.");
			} else {
				throw e;
			}
			assert(Object.keys(propertyBehaviourMapping).length === 3, "Object.assign should have examined exactly 3 properties.");
			assert(typeof propertyBehaviourMapping.a === 'function', "Object.assign should have examined property a.");
			assert(typeof propertyBehaviourMapping.b === 'function', "Object.assign should have examined property b.");
			assert(typeof propertyBehaviourMapping.c === 'function', "Object.assign should have examined property c.");
			['a', 'b', 'c'].forEach(function(key) {
				if (propertyBehaviourMapping[key] === returnsFooBehaviour) {
					assert(target[key] === "foo", "Object.assign should have copied the first property over.");
				} else if (propertyBehaviourMapping[key] === throwsException1Behaviour || propertyBehaviourMapping[key] === throwsException2Behaviour) {
					assert(target[key] === undefined, "Object.assign should not have created a property out of nothing.");
				} else {
					$ERROR("propertyBehaviourMapping for " + key + " was " + propertyBehaviourMapping[key]);
				}
			});
			var targetKeys = Object.keys(target);
			assert(targetKeys.length <= 1, "Object.assign should not have created a property out of nothing.");
			assert(targetKeys.length >= 1, "Object.assign should have created the one property.");
		}
	})();

	//Step 9.d: If a property fails to copy on write, the other properties should still copy.
	(function (undefined) {
		/*
		 * The idea behind the implementation here is that we defined 3 properties,
		 * but we don't know in what order those properties will be written to. That said,
		 * we WANT the first property write to succeed, the second to fail, and the
		 * third to succeed.
		 */
		var errMessage = "Fake error for test.";
		var propertyBehaviourMapping = {};
		var alpha = undefined, beta = undefined;
		var writesToAlphaBehaviour = function (arg) { alpha = arg; };
		var throwsExceptionBehaviour = function (arg) { throw new Error(errMessage); };
		var writesToBetaBehaviour = function (arg) { beta = arg; };
		var behaviours = [
			writesToAlphaBehaviour,
			throwsExceptionBehaviour,
			writesToBetaBehaviour
		];
		function associateNextBehaviour(key) {
			if (! propertyBehaviourMapping[key]) {
				var behaviourKeys = Object.keys(propertyBehaviourMapping);
				propertyBehaviourMapping[key] = behaviours[behaviourKeys.length];
			}
		}
		
		var source = {
			a: "aaa",
			b: "bbb",
			c: "ccc"
		};
		var target = {
			set a(arg) {
				associateNextBehaviour("a");
				return propertyBehaviourMapping.a(arg);
			} , set b(arg) {
				associateNextBehaviour("b");
				return propertyBehaviourMapping.b(arg);
			} , set c(arg) {
				associateNextBehaviour("c");
				return propertyBehaviourMapping.c(arg);
			}
		};
		try {
			Object.assign(target, source);
			$ERROR("Object.assign should have thrown an exception, but it completed successfully.");
		} catch (e) {
			if (e instanceof Error && e.message === errMessage) {
				//This is the expected behaviour
			} else {
				throw e;
			}
			assert(Object.keys(propertyBehaviourMapping).length === 3, "Object.assign should have examined exactly 3 properties.");
			assert(typeof propertyBehaviourMapping.a === 'function', "Object.assign should have examined property a.");
			assert(typeof propertyBehaviourMapping.b === 'function', "Object.assign should have examined property b.");
			assert(typeof propertyBehaviourMapping.c === 'function', "Object.assign should have examined property c.");
			['a', 'b', 'c'].forEach(function(key) {
				if (propertyBehaviourMapping[key] === writesToAlphaBehaviour) {
					assert(alpha === source[key], "Object.assign should have copied the first property over.");
				} else if (propertyBehaviourMapping[key] === throwsExceptionBehaviour) {
					assert(target[key] === undefined, "Object.assign should not have created a property out of nothing.");
				} else if (propertyBehaviourMapping[key] === writesToBetaBehaviour) {
					assert(beta === source[key], "Object.assign should have copied a property over even after an exception was thrown.");
				} else {
					$ERROR("propertyBehaviourMapping for " + key + " was " + propertyBehaviourMapping[key]);
				}
			});
			assert(alpha !== undefined, "Object.assign should have invoked writesToAlphaBehaviour.");
			assert(beta !== undefined, "Object.assign should have invoked writesToBetaBehaviour.");
		}
	})();

	//Step 9.d: If a property fails to copy on write multiple times, the first encountered exception gets returned.
	(function (undefined) {
		/*
		 * The idea behind the implementation here is that we defined 3 properties,
		 * but we don't know in what order those properties will be written to. That said,
		 * we WANT the first property write to succeed, the second to fail with
		 * exception 1, and the third to fail with exception 2.
		 */
		var errMessage1 = "Fake error for test 1.";
		var errMessage2 = "Fake error for test 2.";
		var propertyBehaviourMapping = {};
		var alpha = undefined;
		var writesToAlphaBehaviour = function (arg) { alpha = arg; };
		var throwsException1Behaviour = function (arg) { throw new Error(errMessage1); };
		var throwsException2Behaviour = function (arg) { throw new Error(errMessage2); };
		var behaviours = [
			writesToAlphaBehaviour,
			throwsException1Behaviour,
			throwsException2Behaviour
		];
		function associateNextBehaviour(key) {
			if (! propertyBehaviourMapping[key]) {
				var behaviourKeys = Object.keys(propertyBehaviourMapping);
				propertyBehaviourMapping[key] = behaviours[behaviourKeys.length];
			}
		}
		
		var source = {
			a: "aaa",
			b: "bbb",
			c: "ccc"
		};
		var target = {
			set a(arg) {
				associateNextBehaviour("a");
				return propertyBehaviourMapping.a(arg);
			} , set b(arg) {
				associateNextBehaviour("b");
				return propertyBehaviourMapping.b(arg);
			} , set c(arg) {
				associateNextBehaviour("c");
				return propertyBehaviourMapping.c(arg);
			}
		};
		try {
			Object.assign(target, source);
			$ERROR("Object.assign should have thrown an exception, but it completed successfully.");
		} catch (e) {
			if (e instanceof Error && e.message === errMessage1) {
				//This is the expected behaviour
			} else if (e instanceof Error && e.message === errMessage2) {
				$ERROR("Object.assign should have thrown the first exception it encountered, but it threw the second (last) one instead.");
			} else {
				throw e;
			}
			assert(Object.keys(propertyBehaviourMapping).length === 3, "Object.assign should have examined exactly 3 properties.");
			assert(typeof propertyBehaviourMapping.a === 'function', "Object.assign should have examined property a.");
			assert(typeof propertyBehaviourMapping.b === 'function', "Object.assign should have examined property b.");
			assert(typeof propertyBehaviourMapping.c === 'function', "Object.assign should have examined property c.");
			['a', 'b', 'c'].forEach(function(key) {
				if (propertyBehaviourMapping[key] === writesToAlphaBehaviour) {
					assert(alpha === source[key], "Object.assign should have copied the first property over.");
				} else if (propertyBehaviourMapping[key] === throwsException1Behaviour || propertyBehaviourMapping[key] === throwsException2Behaviour) {
					assert(target[key] === undefined, "Object.assign should not have created a property out of nothing.");
				} else {
					$ERROR("propertyBehaviourMapping for " + key + " was " + propertyBehaviourMapping[key]);
				}
			});
			assert(alpha !== undefined , "Object.assign should have invoked writesToAlphaBehaviour.");
		}
	})();
})();
