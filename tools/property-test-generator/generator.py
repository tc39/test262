# Copyright (C) 2025 André Bargull. All rights reserved.
# This code is governed by the BSD license found in the LICENSE file.

import glob
import logging
import os
import re
import textwrap
from pathlib import Path

from idreference import IdReference as IdRef
from template import NativeErrors, TypedArrayConstructors
from testfile import TestFile
from value import Value

from config import cfg

logger = logging.getLogger("test262." + __name__)


def recursive_properties_with_kind(target, kind):
    """Yield all sub-clauses for |target| with declaration kind |kind|."""
    if target.is_grammar():
        return
    if target.is_constructor():
        return
    if not target.is_accessible():
        return
    for sub in target.subclauses:
        sub_kind = sub.kind()
        if sub_kind == kind:
            yield sub
        elif sub_kind is None:
            yield from recursive_properties_with_kind(sub, kind)


def expand_constructor_template(idref):
    assert idref.is_template()

    if idref.template_name() == "_NativeError_":
        for k in NativeErrors.keys():
            yield (idref.instantiate(k), k)
    elif idref.template_name() == "_TypedArray_":
        for k in TypedArrayConstructors.keys():
            yield (idref.instantiate(k), k)
    else:
        raise ValueError(f"Unexpected template type: {idref}")


def expand_prototype_template(idref):
    assert idref.is_template()

    if idref.template_name() == "_NativeError_":
        for k in NativeErrors.keys():
            yield idref.instantiate(k)
    elif idref.template_name() == "_TypedArray_":
        for k in TypedArrayConstructors.keys():
            yield idref.instantiate(k)
    else:
        raise ValueError(f"Unexpected template type: {idref}")


def expand_value_template(idref):
    assert idref.is_template()

    key = idref.property_key()

    if idref.template_name() == "_NativeError_":
        for k, p in NativeErrors.items():
            yield (idref.instantiate(k), Value(*p[key]))
    elif idref.template_name() == "_TypedArray_":
        for k, p in TypedArrayConstructors.items():
            yield (idref.instantiate(k), Value(*p[key]))
    else:
        raise ValueError(f"Unexpected template type: {idref}")


def expand_if_constructor_template(idref, name):
    if not idref.is_template():
        yield (idref, name)
    else:
        yield from expand_constructor_template(idref)


def expand_if_prototype_template(idref):
    if not idref.is_template():
        yield idref
    else:
        yield from expand_prototype_template(idref)


def expand_if_value_template(idref, value):
    if not idref.is_template():
        yield (idref, value)
    else:
        yield from expand_value_template(idref)


re_var_with_markup = re.compile(r"\b_(\w+)_\b")


def remove_markup(text):
    return re_var_with_markup.sub(r"\1", text.replace("*", ""))


ctor_info_text_wrapper = textwrap.TextWrapper(width=76, subsequent_indent=" " * 4)
info_text_wrapper = textwrap.TextWrapper(width=76, subsequent_indent=" " * 2)


def test_info_for_constructor(ctor):
    test_info = f"""\
{ctor.header()}

  {remove_markup(ctor.constructor_function().header())}
"""

    if ctor_prop_clause := ctor.constructor_property_clause():
        test_info += f"""
  {ctor_prop_clause.header()}\
"""

        for prop_text in ctor_prop_clause.property_list():
            # Skip over enumerations which don't get displayed anyway.
            if prop_text.endswith(":"):
                continue

            wrapped_text = ctor_info_text_wrapper.fill(remove_markup(prop_text))
            test_info += f"""
  - {wrapped_text}\
"""

    return test_info


def test_info_for_prototype(proto_clause, is_callable):
    test_info = f"""\
{proto_clause.header()}
"""

    for prop_text in proto_clause.property_list():
        # Skip over enumerations which don't get displayed anyway.
        if prop_text.endswith(":"):
            continue

        wrapped_text = info_text_wrapper.fill(remove_markup(prop_text))
        test_info += f"""\
- {wrapped_text}
"""

    test_info += """
Unless specified otherwise, the [[Extensible]] internal slot of a built-in object
initially has the value true.

Unless otherwise specified every built-in prototype object has the Object prototype
object, which is the initial value of the expression Object.prototype (20.1.3),
as the value of its [[Prototype]] internal slot, except the Object prototype object
itself.\
"""

    if is_callable:
        test_info += """

Built-in function objects that are not identified as constructors do not implement
the [[Construct]] internal method unless otherwise specified in the description of
a particular function.\
"""

    return test_info


def test_info_for_object(object_clause):
    test_info = f"""\
{object_clause.header()}
"""

    for prop_text in object_clause.property_list():
        # Skip over enumerations which don't get displayed anyway.
        if prop_text.endswith(":"):
            continue

        wrapped_text = info_text_wrapper.fill(remove_markup(prop_text))
        test_info += f"""\
- {wrapped_text}
"""

    test_info += """
Unless specified otherwise, the [[Extensible]] internal slot of a built-in object
initially has the value true.

Unless otherwise specified every built-in prototype object has the Object prototype
object, which is the initial value of the expression Object.prototype (20.1.3),
as the value of its [[Prototype]] internal slot, except the Object prototype object
itself.\
"""

    return test_info


def test_info_for_property_kind(clause):
    test_info = f"""\
{remove_markup(clause.header())}
"""

    if not clause.is_link():
        for prop_text in clause.property_paragraphs():
            # Skip over enumerations which don't get displayed anyway.
            if prop_text.endswith(":"):
                continue

            wrapped_text = info_text_wrapper.fill(remove_markup(prop_text))
            test_info += f"""\
- {wrapped_text}
"""

    if not clause.is_accessor():
        test_info += """
ECMAScript Standard Built-in Objects

Every other data property described in clauses 19 through 28 and in Annex B.2
has the attributes { [[Writable]]: true, [[Enumerable]]: false,
[[Configurable]]: true } unless otherwise specified.\
"""
    else:
        test_info += """
ECMAScript Standard Built-in Objects

Every accessor property described in clauses 19 through 28 and in Annex B.2 has
the attributes { [[Enumerable]]: false, [[Configurable]]: true } unless
otherwise specified. If only a get accessor function is described, the set
accessor function is the default value, undefined. If only a set accessor is
described the get accessor is the default value, undefined.\
"""

    return test_info


def make_constructor_test(target, global_props):
    for ctor in target.constructor_clauses():
        ctor_props = ctor.constructor_properties()
        if ctor_props is None:
            continue
        (idref, prototype, name, length) = ctor_props
        from_template = idref.is_template()

        if prototype is not None:
            prototype_name = prototype.to_script_value(global_props)
        else:
            prototype_name = "undefined"

        test_info = test_info_for_constructor(ctor)

        for idref, name in expand_if_constructor_template(idref, name):
            var_name = idref.to_get(global_props)

            test_content = f"""\
verifyBuiltinConstructor({var_name}, "{name}", {length}, {prototype_name});
"""

            yield TestFile(ctor, idref, test_info, test_content, from_template)


def make_prototype_test(target, global_props):
    if target.is_prototype():
        prototypes = [target]
    else:
        prototypes = target.prototype_clauses()

    for proto in prototypes:
        proto_props = proto.prototype_properties()
        if proto_props is None:
            continue
        (idref, prototype, is_callable) = proto_props
        from_template = idref.is_template()

        # Ignore prototype clauses which contain overrides. There's already
        # a prototype property test generated for the original definition.
        if any(c.is_override() for c in proto.subclauses):
            logger.debug(f"Skip prototype with overrides: {idref.to_get()}")
            continue

        assert prototype is not None
        prototype_name = prototype.to_script_value(global_props)

        test_info = test_info_for_prototype(proto, is_callable)

        for idref in expand_if_prototype_template(idref):
            var_name = idref.to_get(global_props)

            test_content = ""

            if idref.has_intrinsic(global_props):
                test_content += f"""\
var proto = {var_name};
"""
                var_name = "proto"

            test_content += f"""\
assert.sameValue(Object.getPrototypeOf({var_name}), {prototype_name});
assert.sameValue(Object.isExtensible({var_name}), true);
"""

            if is_callable:
                test_content += f"""\
assert.sameValue(typeof {var_name}, "function");
assert.sameValue(isConstructor({var_name}), false);
"""
            else:
                test_content += f"""\
assert.sameValue(typeof {var_name}, "object");
"""

            yield TestFile(proto, idref, test_info, test_content, from_template)


def make_object_test(target, global_props):
    if not target.is_object():
        return

    object_props = target.object_properties()
    if object_props is None:
        return
    (idref, prototype) = object_props
    assert not idref.is_template(), "not implemented"

    if idref != IdRef("global"):
        var_name = idref.to_get(global_props)
    else:
        # Access the global object through the |this| keyword.
        var_name = "this"

    if prototype is not None:
        prototype_name = prototype.to_script_value(global_props)
    else:
        prototype_name = None

    test_content = ""

    if idref.has_intrinsic(global_props):
        test_content += f"""\
var obj = {var_name};
"""
        var_name = "obj"

    if prototype is not None:
        test_content += f"""\
assert.sameValue(Object.getPrototypeOf({var_name}), {prototype_name});
"""

    test_content += f"""\
assert.sameValue(Object.isExtensible({var_name}), true);
assert.sameValue(typeof {var_name}, "object");
"""

    test_info = test_info_for_object(target)

    yield TestFile(target, idref, test_info, test_content)


def make_function_test(clause, global_props):
    for fun in recursive_properties_with_kind(clause, "function"):
        assert not (fun.is_optional() and not fun.is_legacy()), (
            "not implemented: " + fun.header()
        )
        (idref, name, length, attributes, alias) = fun.function_properties()
        assert not idref.is_template(), "not implemented"

        var_name = idref.to_get(global_props)
        (obj_name, key_name) = idref.to_get_own(global_props)

        test_info = test_info_for_property_kind(fun)

        if fun.is_link():
            test_content = ""
        elif alias:
            alias_var_name = alias.to_get(global_props)
            test_content = f"""\
assert.sameValue({var_name}, {alias_var_name});

"""
            # Use the alias var-name below.
            var_name = alias_var_name
        else:
            test_content = f"""\
verifyBuiltinFunction({var_name}, "{name}", {length});

"""

        test_content += f"""\
verifyPrimordialProperty({obj_name}, {key_name}, {{
  value: {var_name},
  writable: {"true" if attributes["Writable"] else "false"},
  enumerable: {"true" if attributes["Enumerable"] else "false"},
  configurable: {"true" if attributes["Configurable"] else "false"},
}});
"""

        yield TestFile(fun, idref, test_info, test_content)


def make_accessor_test(clause, global_props):
    for acc in recursive_properties_with_kind(clause, "accessor"):
        assert not (acc.is_optional() and not acc.is_legacy()), (
            "not implemented: " + acc.header()
        )

        (idref, get_name, set_name, attributes) = acc.accessor_properties()
        assert not idref.is_template(), "not implemented"

        (obj_name, key_name) = idref.to_get_own(global_props)

        test_info = test_info_for_property_kind(acc)

        test_content = f"""\
var desc = Object.getOwnPropertyDescriptor({obj_name}, {key_name});

"""

        if get_name is not None:
            test_content += f"""\
verifyBuiltinFunction(desc.get, "{get_name}", 0);

"""

        if set_name is not None:
            test_content += f"""\
verifyBuiltinFunction(desc.set, "{set_name}", 1);

"""

        test_content += f"""\
verifyPrimordialProperty({obj_name}, {key_name}, {{
  get: {"desc.get" if get_name is not None else "undefined"},
  set: {"desc.set" if set_name is not None else "undefined"},
  enumerable: {"true" if attributes["Enumerable"] else "false"},
  configurable: {"true" if attributes["Configurable"] else "false"},
}});
"""

        yield TestFile(acc, idref, test_info, test_content)


def make_value_test(clause, global_props):
    for val in recursive_properties_with_kind(clause, "value"):
        (idref, value, attributes) = val.value_properties()
        from_template = idref.is_template()

        test_info = test_info_for_property_kind(val)

        for idref, value in expand_if_value_template(idref, value):
            (obj_name, key_name) = idref.to_get_own(global_props)

            script_value = (
                value.to_script_value(global_props) if value is not None else None
            )

            test_content = ""

            if script_value is not None:
                test_content += f"""\
verifyPrimordialProperty({obj_name}, {key_name}, {{
  value: {script_value},
  writable: {"true" if attributes["Writable"] else "false"},
  enumerable: {"true" if attributes["Enumerable"] else "false"},
  configurable: {"true" if attributes["Configurable"] else "false"},
}});
"""
            else:
                test_content += f"""\
verifyPrimordialProperty({obj_name}, {key_name}, {{
  writable: {"true" if attributes["Writable"] else "false"},
  enumerable: {"true" if attributes["Enumerable"] else "false"},
  configurable: {"true" if attributes["Configurable"] else "false"},
}});
"""

            if val.is_optional():
                test_content = f"""\
if ({obj_name}.hasOwnProperty({key_name})) {{
{textwrap.indent(test_content, " " * 2)}
}}
"""

            yield TestFile(val, idref, test_info, test_content, from_template)


def make_tests_for(target, global_props):
    yield from make_constructor_test(target, global_props)
    yield from make_prototype_test(target, global_props)
    yield from make_object_test(target, global_props)

    for clause in list(target.property_clauses()) or [target]:
        yield from make_function_test(clause, global_props)
        yield from make_accessor_test(clause, global_props)
        yield from make_value_test(clause, global_props)


def try_parse_testfile(test262parser, source, test_name):
    """
    Returns the result of test262parser.parseTestRecord() or None if a parser
    error occured.

    See <https://github.com/tc39/test262/blob/main/INTERPRETING.md> for an
    overview of the returned test attributes.
    """
    try:
        return test262parser.parseTestRecord(source, test_name)
    except Exception as err:
        logger.warn(f"Error '{err}' in file: {test_name}")
        logger.warn("Please report this error to the test262 GitHub repository!")
        return None


def guess_features(test262_dir_path):
    features = None

    for file_name in glob.glob("*.js", root_dir=test262_dir_path):
        # Ignore non-test files.
        if file_name.endswith("_FIXTURE.js"):
            continue

        file_path = os.path.join(test262_dir_path, file_name)

        with open(file_path, encoding="utf-8") as test_file:
            test_source = test_file.read()

        test_rec = try_parse_testfile(cfg.test262parser, test_source, file_name)
        if test_rec is None:
            continue

        test_features = set(test_rec.get("features", []))

        if features is None:
            features = test_features
        else:
            features = features & test_features

        if len(features) == 0:
            break

    return features if features is not None else set()


def harness_features_for_includes(includes):
    return {
        feature
        for include in includes
        for feature in cfg.harness_features.get(include, [])
    }


def generate_test(test, global_props):
    test262_test = os.path.join(cfg.test262_dir, "test")

    file_path = test.file_path()
    test262_file_path = os.path.join(test262_test, file_path)
    test262_dir_path = os.path.dirname(test262_file_path)

    if cfg.features is None:
        # Guess the feature tags from files in the same directory if no explicit
        # features tags are present.
        if os.path.isdir(test262_dir_path):
            features = guess_features(test262_dir_path)
        else:
            features = set()
    else:
        features = set(cfg.features.split(","))

    logger.info(f"Generate test for: {test.idref.to_get()}")
    logger.debug(f"  with path {file_path} and features '{features}'")

    includes = []
    if (
        "verifyBuiltinConstructor" in test.content
        or "verifyBuiltinFunction" in test.content
    ):
        includes += ["builtin.js"]
        includes += ["propertyHelper.js"]
    elif "verifyPrimordialProperty" in test.content:
        includes += ["propertyHelper.js"]
    if "getWellKnownIntrinsicObject" in test.content:
        includes += ["wellKnownIntrinsicObjects.js"]
    if "isConstructor" in test.content:
        includes += ["isConstructor.js"]

    # Add feature tags from includes.
    features = features | harness_features_for_includes(includes)

    # Use a different output directory if requested.
    if cfg.out:
        test262_out_test = os.path.join(cfg.test262_dir, "test", cfg.out)
        test262_file_path = os.path.join(test262_out_test, file_path)

    # Mark as generated to allow missing license block.
    metadata = """\
flags: [generated]\
"""

    # Add includes if present.
    if includes:
        metadata += f"""
includes: [{", ".join(includes)}]\
"""

    # Add features if present.
    if features:
        metadata += f"""
features: [{", ".join(sorted(features))}]\
"""

    test_content = f"""\
// Test generated by: {Path(__file__).parent.name}

/*---
esid: {test.clause.id()}
description: Property test for {test.idref.to_get()}
info: |
{textwrap.indent(test.info, " " * 2)}
{metadata}
---*/

{test.content}\
"""

    return (test262_file_path, test_content)
