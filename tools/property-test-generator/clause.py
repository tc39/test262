# Copyright (C) 2025 André Bargull. All rights reserved.
# This code is governed by the BSD license found in the LICENSE file.

import logging
import re

from idreference import IdReference as IdRef
from value import Value

logger = logging.getLogger("test262." + __name__)


class Clause:
    """Represents an <emu-clause> or <emu-annex> definition."""

    def __init__(self, parent, elem):
        self.parent = parent
        self.elem = elem
        self.subclauses = []
        if parent:
            parent.subclauses.append(self)

    def __repr__(self):
        return f"id={self.id()} (header={self.header()})"

    def id(self):
        """Return the 'id' attribute of this clause."""
        return self.elem.find_attribute("id")

    def header(self):
        """Return text content of this clauses' header."""
        h1 = next(self.elem.find_elements("h1"), None)
        return h1.text_content() if h1 else ""

    def property_list(self):
        return (
            li.normalized_text_content()
            for ul in self.elem.find_elements("ul")
            for li in ul.find_elements("li")
        )

    def property_paragraphs(self):
        return (p.normalized_text_content() for p in self.elem.find_elements("p"))

    def is_operation(self):
        """Return true if this clause is an abstract operation, sdo, etc."""
        # "abstract operation" in type or
        # "sdo" in type or
        # "concrete method" in type or
        # "implementation-defined" in type or
        # "host-defined" in type or
        # "internal method" in type or
        # "numeric method" in type
        if self.elem.find_attribute("type") is not None:
            return True
        if self.elem.find_attribute("aoid") is not None:
            return True
        for p in self.elem.find_elements("p"):
            if "concrete method" in p.text:
                return True
        return False

    def is_grammar(self):
        """Return true if this clause is part of the grammar section."""
        return next(self.elem.find_elements("emu-grammar"), None) is not None

    def is_accessible(self):
        """Return true if the current definition describes an accessible value."""
        for attr in self.property_list():
            if "is never directly accessible to ECMAScript code" in attr:
                return False
        return True

    re_target_name = re.compile(
        r"(?:The\s+)?(?P<name>[\w%\.]+?)\s*(?:\(.+?\))?(\s+Intrinsic)?(?:\s+(?:Object|Constructor)s?)?(\s+Structure)?"
    )

    def target_name(self):
        """Short descriptive name of a clause."""
        if m := Clause.re_target_name.fullmatch(self.header()):
            return m.group("name")

    def is_link(self):
        """Return true if this clause is a link."""
        p = list(self.elem.find_elements("p"))
        return len(p) == 1 and p[0].text.startswith("See")

    def is_annex_b(self):
        """Return true if this clause is for Annex-B."""
        return self.elem.tag == "emu-annex"

    def is_optional(self):
        """Return true if this clause describes an optional property."""
        return self.elem.has_attribute("normative-optional")

    def is_legacy(self):
        """Return true if this clause describes a legacy property."""
        return self.elem.has_attribute("legacy")

    def is_override(self):
        """Return true if this clause describes an override property."""
        for p in self.property_paragraphs():
            if p.startswith("This definition supersedes the definition provided in"):
                return True
        return False

    def is_properties(self):
        """Return true if this clause is a 'Properties' definition clause."""
        return "Properties of the" in self.header()

    def property_clauses(self):
        """Return all 'Property' definition sub-clauses."""
        return (sub for sub in self.subclauses if sub.is_properties())

    def has_properties(self):
        """Return true if this clause has any 'Property' definition sub-clauses."""
        return next(self.property_clauses(), None) is not None

    re_constructor = re.compile(
        r"The\s+(?P<name>.+?)\s+(Constructor|Constructors|Intrinsic Object)"
    )

    def is_constructor(self):
        """Return true if this clause is a 'Constructor' definition clause."""
        return Clause.re_constructor.fullmatch(self.header()) is not None

    def constructor_clauses(self):
        """Return all 'Constructor' definition sub-clauses."""
        return (sub for sub in self.subclauses if sub.is_constructor())

    def has_constructor(self):
        """Return true if this clause has any 'Constructor' definition sub-clauses."""
        return next(self.constructor_clauses(), None) is not None

    re_prototype = re.compile(
        r"Properties of the\s+(?P<name>.+?)\s+Prototype (Object|Objects)"
    )

    re_intrinsic_prototype = re.compile(
        r"The\s+(?=%\w+Prototype%)(?P<name>.+?)\s+Object"
    )

    def is_prototype(self):
        """Return true if this clause is a 'Prototype' definition clause."""
        return (
            Clause.re_prototype.fullmatch(self.header()) is not None
            or Clause.re_intrinsic_prototype.fullmatch(self.header()) is not None
        )

    def prototype_clauses(self):
        """Return all 'Prototype' definition sub-clauses."""
        return (sub for sub in self.subclauses if sub.is_prototype())

    def has_prototype(self):
        """Return true if this clause has any 'Prototype' definition sub-clauses."""
        return next(self.prototype_clauses(), None) is not None

    re_object = re.compile(r"The\s+(?P<name>.+?)\s+Object")

    def is_object(self):
        """Return true if this clause is an 'Object' definition clause."""
        return (
            Clause.re_object.fullmatch(self.header()) is not None
            and not self.is_constructor()
            and not self.is_prototype()
        )

    def kind(self):
        """Return the declaration kind of the current clause."""
        (kind, _, _) = self.declaration()
        return kind

    def is_value(self):
        """Return true if the current clause is a value definition."""
        return self.kind() == "value"

    def is_function(self):
        """Return true if the current clause is a function definition."""
        return self.kind() == "function"

    def is_accessor(self):
        """Return true if the current clause is an accessor definition."""
        return self.kind() == "accessor"

    def value_clauses(self):
        """Return all value definition sub-clauses."""
        if self.is_grammar():
            return iter(())
        return (sub for sub in self.subclauses if sub.is_value())

    def function_clauses(self):
        """Return all function definition sub-clauses."""
        if self.is_grammar():
            return iter(())
        return (sub for sub in self.subclauses if sub.is_function())

    def accessor_clauses(self):
        """Return all accessor definition sub-clauses."""
        if self.is_grammar():
            return iter(())
        return (sub for sub in self.subclauses if sub.is_accessor())

    def has_values(self):
        """Return true if this clause has any value definition sub-clauses."""
        return next(self.value_clauses(), None) is not None

    def has_functions(self):
        """Return true if this clause has any function definition sub-clauses."""
        return next(self.function_clauses(), None) is not None

    def has_accessors(self):
        """Return true if this clause has any accessor definition sub-clauses."""
        return next(self.accessor_clauses(), None) is not None

    re_declaration = re.compile(
        r"(?P<accessor>(?:get|set)(?=\s))?(?P<id>[\w%\.\[\]\s]+)(?P<params>\(.*?\))?"
    )

    def declaration(self):
        """Return the declaration kind of the current clause."""

        # Ignore abstract operations or grammar clauses.
        if self.is_operation() or self.is_grammar():
            return (None, None, None)

        m = Clause.re_declaration.fullmatch(self.header())
        if not m:
            return (None, None, None)

        idref = IdRef.try_from(m.group("id"))
        if idref is None:
            return (None, None, None)

        params = m.group("params")
        if params:
            return ("function", idref, params[1:-1])

        accessor_kind = m.group("accessor")
        if m.group("accessor"):
            return ("accessor", idref, accessor_kind)

        # Accessor declaration can match the value syntax.
        for p in self.property_paragraphs():
            if "is an accessor property" in p:
                return ("accessor", idref, None)

        # Value declaration must contain an initial value.
        for p in self.property_paragraphs():
            if "value of" in p or "value for" in p:
                return ("value", idref, None)

        # Value-typed links don't need an initial value.
        if self.is_link():
            return ("value", idref, None)

        logger.debug(f"not a declaration: {self}")
        return (None, None, None)

    def default_name_and_length(self):
        """Return the default 'name' and 'length' property values of a function declaration."""
        (kind, idref, params) = self.declaration()
        assert kind == "function"

        # https://tc39.es/ecma262/#sec-ecmascript-standard-built-in-objects
        #
        # Every built-in function object, including constructors, has a "name" property whose value is a String. Unless otherwise specified, this value is the name that is given to the function in this specification.
        # For functions that are specified as properties of objects, the name value is the property name string used to access the function.

        # Last identifier part is the default name.
        name = idref.to_function_name()

        # https://tc39.es/ecma262/#sec-ecmascript-standard-built-in-objects
        #
        # Every built-in function object, including constructors, has a "length" property whose value is a non-negative integral Number. Unless otherwise specified, this value is the number of required parameters shown in the subclause heading for the function description. Optional parameters and rest parameters are not included in the parameter count.

        # Remove optional and rest parameters
        (params, _, _) = params.partition("[")
        (params, _, _) = params.partition("...")

        # Split at "," and then count any non-empty string names.
        length = len([k for k in params.split(",") if k.strip()])

        return (idref, name, length)

    re_length_property = re.compile(
        r'has a \*"length"\* property whose value is \*(?P<length>\d+)\*𝔽?\.'
    )
    re_name_property = re.compile(
        r'has a \*"name"\* property whose value is \*"(?P<name>.+?)"\*\.'
    )
    re_prototype_internal_slot = re.compile(
        r"has a \[\[Prototype\]\] internal slot whose value is (?:the intrinsic object )?(?P<prototype>.+?)\."
    )

    @staticmethod
    def prototype_internal_slot(text):
        if m := Clause.re_prototype_internal_slot.fullmatch(text):
            prototype = m.group("prototype")
            if prototype == "*null*":
                return Value.null()
            return Value.intrinsic(prototype)
        return None

    def constructor_function(self):
        """Return the constructor function declaration in a 'Constructor' clause."""
        assert self.is_constructor()
        return next(self.function_clauses(), None)

    def constructor_property_clause(self):
        """Return the 'Property' definition clause for a 'Constructor' clause."""
        assert self.is_constructor()

        def is_constructor_clause(p):
            return p.header().endswith(
                ("Constructor", "Constructors", "Intrinsic Object")
            )

        # Find the first constructor property clause after |self|.
        return next(
            (
                p
                for p in self.parent.property_clauses()
                if is_constructor_clause(p) and p.elem > self.elem
            ),
            None,
        )

    def constructor_properties(self):
        """Return a tuple describing this constructor function. Or None if no constructor function was found."""
        assert self.is_constructor()

        # Get the constructor function definition.
        ctor_fun = self.constructor_function()

        # Return if no function definition was found. (This case can happen for
        # proposal specs.)
        if not ctor_fun:
            return None

        prototype = None
        (idref, name, length) = ctor_fun.default_name_and_length()

        # If constructor properties are present, check for relevant definitions.
        if ctor_props := self.constructor_property_clause():
            for attr in ctor_props.property_list():
                if m := Clause.re_length_property.fullmatch(attr):
                    length = m.group("length")
                elif m := Clause.re_name_property.fullmatch(attr):
                    name = m.group("name")
                elif p := Clause.prototype_internal_slot(attr):
                    prototype = p

        # Check for "length" and "name" definitions at the constructor function.
        for p in ctor_fun.property_paragraphs():
            if m := Clause.re_method_length.fullmatch(p):
                length = m.group("length")
            elif m := Clause.re_method_name.fullmatch(p):
                name = m.group("name")

        return (idref, prototype, name, length)

    def prototype_id(self):
        """Return the id-reference of this prototype clause."""
        assert self.is_prototype()
        if m := Clause.re_prototype.fullmatch(self.header()):
            return IdRef(m.group("name") + ".prototype")
        if m := Clause.re_intrinsic_prototype.fullmatch(self.header()):
            return IdRef(m.group("name"))
        return None

    def prototype_properties(self):
        """Return a tuple describing this prototype object."""
        assert self.is_prototype()

        # Ignore prototype clauses which aren't prototype definitions.
        if (
            next(self.property_list(), None) is None
            and next(self.property_paragraphs(), None) is None
        ):
            return None

        idref = self.prototype_id()
        prototype = Value.intrinsic("Object.prototype")
        is_callable = False

        for attr in self.property_list():
            if p := Clause.prototype_internal_slot(attr):
                prototype = p
            elif attr.startswith(
                "is itself a built-in function object"
            ) or attr.startswith("has a [[Call]] internal method"):
                is_callable = True

        return (idref, prototype, is_callable)

    def object_id(self):
        """Return the id-reference of this object clause."""
        assert self.is_object()
        if m := Clause.re_object.fullmatch(self.header()):
            name = m.group("name")

            # Use lowercase "global" to match existing tests.
            if name == "Global":
                name = "global"

            return IdRef(name)
        return None

    def object_properties(self):
        """Return a tuple describing this object definition."""
        assert self.is_object()

        # Ignore object clauses which aren't object definitions.
        if (
            next(self.property_list(), None) is None
            and next(self.property_paragraphs(), None) is None
        ):
            return None

        idref = self.object_id()
        prototype = Value.intrinsic("Object.prototype")

        for attr in self.property_list():
            if attr.startswith(
                "has a [[Prototype]] internal slot whose value is host-defined"
            ):
                prototype = None
            elif p := Clause.prototype_internal_slot(attr):
                prototype = p
            else:
                pass

        return (idref, prototype)

    re_method_name = re.compile(
        r'The (?:initial )?value of the \*"name"\* property of this (?:method|function) is \*"(?P<name>.+?)"\*\.'
    )
    re_method_length = re.compile(
        r'The \*"length"\* property of this (?:method|function) is \*(?P<length>\d+)\*𝔽?\.'
    )
    re_anonymous_function = re.compile(r"is an anonymous built-in function")
    re_alias = re.compile(
        r"The initial value of the (?P<name>[\w\.%\"\*]+) property is (?P<alias>%[\w\.]+%)"
    )
    re_property_attributes = re.compile(
        r"This property has the attributes \{(?P<attributes>.+?)\}\."
    )

    @staticmethod
    def property_attributes(text):
        """Generator function yielding property attributes from |text|."""
        m = Clause.re_property_attributes.search(text)
        if m:
            for attr in m.group("attributes").split(","):
                (key, value) = attr.split(":")

                key = key.strip()
                assert key.startswith("[[") and key.endswith("]]")

                key = key[2:-2]
                assert key in ("Writable", "Enumerable", "Configurable")

                value = value.strip()
                assert value in ("*false*", "*true*")

                yield (key, value == "*true*")

    def function_properties(self):
        """Return a tuple describing this built-in function."""
        assert self.is_function()

        (idref, name, length) = self.default_name_and_length()
        alias = None

        # <https://tc39.es/ecma262/#sec-ecmascript-standard-built-in-objects>
        #
        # Default attributes for data properties.
        attributes = {"Writable": True, "Enumerable": False, "Configurable": True}

        has_explicit_name = False

        for p in self.property_paragraphs():
            if m := Clause.re_method_length.fullmatch(p):
                length = m.group("length")
            elif m := Clause.re_method_name.fullmatch(p):
                name = m.group("name")
                has_explicit_name = True

            if m := Clause.re_alias.match(p):
                alias = IdRef(m.group("alias"))

            # <https://tc39.es/ecma262/#sec-ecmascript-standard-built-in-objects>
            #
            # Functions that are identified as anonymous functions use the empty String as the value of the "name" property.
            if Clause.re_anonymous_function.search(p):
                name = ""
                has_explicit_name = True

            attributes.update(Clause.property_attributes(p))

        if alias:
            name = None
            length = None

        # <https://tc39.es/ecma262/#sec-ecmascript-standard-built-in-objects>
        #
        # The value of the "name" property is explicitly specified for each built-in functions whose property key is a Symbol value.
        if not alias and not has_explicit_name and idref.is_symbol_property_key():
            logger.warning(
                f"Missing explicit function name for symbol-valued property: {idref.to_get()}"
            )

        return (idref, name, length, attributes, alias)

    def default_accessor_name(self):
        """Return the default 'name' and 'length' property values of an accessor declaration."""
        (kind, idref, accessor_kind) = self.declaration()
        assert kind == "accessor"
        assert accessor_kind in ("get", "set"), accessor_kind

        # https://tc39.es/ecma262/#sec-ecmascript-standard-built-in-objects
        #
        # Every built-in function object, including constructors, has a "name" property whose value is a String. Unless otherwise specified, this value is the name that is given to the function in this specification.
        # For functions that are specified as properties of objects, the name value is the property name string used to access the function.
        # Functions that are specified as get or set accessor functions of built-in properties have "get" or "set" (respectively) passed to the prefix parameter when calling CreateBuiltinFunction.

        # Last identifier part is the default name
        name = idref.to_function_name()

        return (idref, accessor_kind, f"{accessor_kind} {name}")

    re_getter_or_setter_undefined = re.compile(
        r"is an accessor property whose (?P<name>set|get) accessor function is \*undefined\*"
    )
    re_getter_or_setter_clause = re.compile(
        r"The value of the \[\[(?P<kind>Get|Set)\]\] attribute"
    )

    def accessor_name(self, expected_kind):
        """Return the 'name' property of an accessor function."""
        (idref, kind, name) = self.default_accessor_name()
        assert kind == expected_kind

        has_explicit_name = False

        for p in self.property_paragraphs():
            if m := Clause.re_method_name.fullmatch(p):
                name = m.group("name")
                has_explicit_name = True
            elif Clause.re_anonymous_function.search(p):
                name = "<anonymous>"

        # <https://tc39.es/ecma262/#sec-ecmascript-standard-built-in-objects>
        #
        # The value of the "name" property is explicitly specified for each built-in functions whose property key is a Symbol value.
        if not has_explicit_name and idref.is_symbol_property_key():
            logger.warning(
                f"Missing explicit function name for symbol-valued property: {idref.to_get()}"
            )

        return name

    re_accessor_name = re.compile(r"(?P<kind>get|set)\s+(?P<id>[\w\.%\[\]\s]+)")

    def accessor_properties(self):
        """Return a tuple describing this built-in accessor."""
        assert self.is_accessor()

        # <https://tc39.es/ecma262/#sec-ecmascript-standard-built-in-objects>
        #
        # Default attributes for accessor properties.
        attributes = {"Enumerable": False, "Configurable": True}

        missing_accessor = None

        for p in self.property_paragraphs():
            if m := Clause.re_getter_or_setter_undefined.search(p):
                missing_accessor = m.group("name")

            attributes.update(Clause.property_attributes(p))
            assert "Writable" not in attributes

        # <https://tc39.es/ecma262/#sec-ecmascript-standard-built-in-objects>
        #
        # If only a get accessor function is described, the set accessor function is the default value, undefined. If only a set accessor is described the get accessor is the default value, undefined.
        get_clause = None
        set_clause = None

        if missing_accessor is None:
            idref = IdRef(self.header())

            for clause in self.subclauses:
                for p in clause.property_paragraphs():
                    if m := Clause.re_getter_or_setter_clause.match(p):
                        if m.group("kind") == "Get":
                            get_clause = clause
                        else:
                            set_clause = clause
        else:
            m = Clause.re_accessor_name.fullmatch(self.header())
            assert m
            idref = IdRef(m.group("id"))

            if missing_accessor == "set":
                get_clause = self
            else:
                set_clause = self

        assert get_clause is not None or set_clause is not None

        if get_clause:
            get_name = get_clause.accessor_name("get")
        else:
            get_name = None

        if set_clause:
            set_name = set_clause.accessor_name("set")
        else:
            set_name = None

        return (idref, get_name, set_name, attributes)

    re_initial_string_typed_value = re.compile(
        r"The (?:initial )?value of the [\w\.%`\*]+ property is the String value \*\"(?P<value>.*?)\"\*\."
    )
    re_initial_value_string = re.compile(
        r"The (?:initial )?value of [\w\.%`\*]+ is \*\"(?P<value>.*?)\"\*\."
    )
    re_initial_value_empty_string = re.compile(
        r"The (?:initial )?value of [\w\.%`\*]+ is the empty String\."
    )
    re_initial_value_number = re.compile(
        r"The (?:initial )?value of [\w\.%`\*]+ is \*(?P<value>-∞|\+∞|NaN|-?\d+)\*𝔽?(?:\s*\(.*?\))?\."
    )
    re_approx_number_value = re.compile(
        r"The (?:initial|Number )?value (for|of) .*? is approximately (?P<value>-?\d+(?:\.\d+)?(?:\s*×\s*10(?:-?\d+))?)\."
    )
    re_initial_value_undefined = re.compile(
        r"The (?:initial )?value of [\w\.%`\*]+ is \*(?P<value>undefined)\*(?:\s*\(.*?\))?\."
    )
    re_initial_value_null = re.compile(
        r"The (?:initial )?value of [\w\.%`\*]+ is \*(?P<value>null)\*(?:\s*\(.*?\))?\."
    )
    re_initial_value_intrinsic = re.compile(
        r"The (?:initial )?value of [\w\.%`\*]+ is (?:the intrinsic object )?(?P<value>%[\w\.]+%)\."
    )
    re_initial_value_prototype_object = re.compile(
        r"The (?:initial )?value of [\w\.%`\*]+ is the (?P<value>[\w\.%]+) prototype object\."
    )
    re_initial_value_well_known_symbol = re.compile(
        r"The (?:initial )?value of [\w\.%`\*]+ is the well-known symbol (?P<value>%[\w\.]+%) \(\)\."
    )
    re_initial_value_well_known_symbol_old = re.compile(
        r"The (?:initial )?value of [\w\.%`\*]+ is the well-known symbol (?P<value>@@\w+) \(\)\."
    )
    re_initial_value_link = re.compile(r"See \.")
    re_initial_value_ieee_754_2019_double_precision = re.compile(
        r"In the IEEE 754-2019 double precision binary representation.*"
    )

    @staticmethod
    def value_property(text):
        """Return a Value describing a value definition. Or None if not parsable."""
        matchers = [
            ("string", Clause.re_initial_string_typed_value),
            ("string", Clause.re_initial_value_string),
            ("string", Clause.re_initial_value_empty_string),
            ("number", Clause.re_initial_value_number),
            ("number", Clause.re_approx_number_value),
            ("undefined", Clause.re_initial_value_undefined),
            ("null", Clause.re_initial_value_null),
            ("intrinsic", Clause.re_initial_value_intrinsic),
            ("prototype", Clause.re_initial_value_prototype_object),
            ("symbol", Clause.re_initial_value_well_known_symbol),
            ("symbol", Clause.re_initial_value_well_known_symbol_old),
            ("note", Clause.re_initial_value_link),
            ("note", Clause.re_initial_value_ieee_754_2019_double_precision),
        ]

        for kind, matcher in matchers:
            if m := matcher.match(text):
                if m.lastgroup:
                    assert m.lastgroup == "value"
                    return Value(kind, m.group("value"))
                return Value(kind, "")
        return None

    def value_properties(self):
        """Return a tuple describing this value definition."""
        (kind, idref, _) = self.declaration()
        assert kind == "value"

        # <https://tc39.es/ecma262/#sec-ecmascript-standard-built-in-objects>
        #
        # Default attributes for data properties.
        attributes = {"Writable": True, "Enumerable": False, "Configurable": True}

        value = None

        for p in self.property_paragraphs():
            if v := Clause.value_property(p):
                if v.kind != "note":
                    assert value is None, "unexpected duplicate value definition"
                    value = v
            elif not p.startswith("This property has the attributes"):
                if idref.is_template():
                    # Template property values not yet supported.
                    pass
                elif idref.to_get() in (
                    "globalThis",
                    "Array.prototype[Symbol.unscopables]",
                ):
                    # Property values which require special processing.
                    pass
                else:
                    logger.warn(
                        f"Unsupported property value definition for {idref.to_get()}: {p}"
                    )

            attributes.update(Clause.property_attributes(p))

        return (idref, value, attributes)
