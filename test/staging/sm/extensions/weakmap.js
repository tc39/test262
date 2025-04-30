/*
 * Any copyright is dedicated to the Public Domain.
 * http://creativecommons.org/licenses/publicdomain/
 */

/*---
flags:
  - noStrict
description: |
  js weak maps
esid: pending
---*/

test();

function test()
{
    var TestPassCount = 0;
    var TestFailCount = 0;
    var TestTodoCount = 0;

    var TODO = 1;

    function check(fun, todo) {
        var thrown = null;
        var success = false;
        try {
            success = fun();
        } catch (x) {
            thrown = x;
        }

        if (thrown)
            success = false;

        if (todo) {
            TestTodoCount++;

            return;
        }

        if (success) {
            TestPassCount++;
        } else {
            TestFailCount++;
        }
    }

    function checkThrows(fun, todo) {
        let thrown = false;
        try {
            fun();
        } catch (x) {
            thrown = true;
        }

        check(() => thrown, todo);
    }

    var key = {};
    var map = new WeakMap();

    check(() => !map.has(key));
    check(() => map.delete(key) == false);
    check(() => map.set(key, 42) === map);
    check(() => map.get(key) == 42);
    check(() => typeof map.get({}) == "undefined");
    check(() => map.get({}, "foo") == undefined);

    $262.gc(); $262.gc(); $262.gc();

    check(() => map.get(key) == 42);
    check(() => map.delete(key) == true);
    check(() => map.delete(key) == false);
    check(() => map.delete({}) == false);

    check(() => typeof map.get(key) == "undefined");
    check(() => !map.has(key));
    check(() => map.delete(key) == false);

    var value = { };
    check(() => map.set(new Object(), value) === map);
    $262.gc(); $262.gc(); $262.gc();

    check(() => map.has("non-object key") == false);
    check(() => map.has() == false);
    check(() => map.get("non-object key") == undefined);
    check(() => map.get() == undefined);
    check(() => map.delete("non-object key") == false);
    check(() => map.delete() == false);

    check(() => map.set(key) === map);
    check(() => map.get(key) == undefined);

    checkThrows(() => map.set("non-object key", value));

    assert.sameValue(0, TestFailCount, "weak map tests");
}
