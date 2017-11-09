#!/usr/bin/env python
# Copyright (C) 2017 Josh Wolfe. All rights reserved.
# This code is governed by the BSD license found in the LICENSE file.

from __future__ import print_function

import argparse
import os
import sys

from lib.type_coercion import generate_tests

canonical_self_path = os.path.join("tools", "generation", "generate_type_coercion.py")
default_src = "src/type-coercion"
default_out = "test"

def cli():
    running_from_root = os.path.relpath(__file__, ".") == canonical_self_path

    description = "Test262 tool for generating type coercion tests"
    if running_from_root:
        default_src_path = "src"
        default_out_path = "test"
        description += " (running in project root)"
    else:
        description += " (NOT running in project root)"
        default_src_path = None
        default_out_path = None

    parser = argparse.ArgumentParser(description=description)
    src_kwargs = {
        "nargs": "*",
        "default": [default_src],
        "help": "input file or directory (searched recursively for *.py). "
                "When this script is run from the project root, the default is "
                + repr(default_src) + ".",
    }
    if not running_from_root:
        src_kwargs["nargs"] = "+"
        del src_kwargs["default"]
    parser.add_argument("src", **src_kwargs)

    out_kwargs = {
        "default": default_out,
        "help": "directory to write output files. "
                "When this script is run from the project root, the default is "
                + repr(default_out) + ".",
    }
    if not running_from_root:
        del out_kwargs["default"]
        out_kwargs["required"] = True
    parser.add_argument("-o", "--output", **out_kwargs)

    parser.add_argument("-v", "--verbose", action="store_true", default=False,
        help="print progress to stdout")

    args = parser.parse_args()
    main(args.src, args.output, args.verbose)

def main(src_paths, output_path, verbose):
    def print_verbose(*args):
        if not verbose: return
        print(*args)

    input_paths = find_input_paths(src_paths)
    print_verbose("found {} input paths".format(len(input_paths)))

    input_modules = [import_module(input_path) for input_path in input_paths]

    for i, input_module in enumerate(input_modules):
        print_verbose("[{}/{}] {}".format(i + 1, len(input_paths), input_paths[i]))
        def generate_tests_proxy(*args, **kwargs):
            return generate_tests(*args, input_path=input_paths[i], output_root=output_path, **kwargs)
        input_module.generate_type_coercion(generate_tests_proxy)

def find_input_paths(paths):
    results = []
    already_found_abs_paths = set()
    def recurse(path, tolerate_bad_path):
        if path.endswith(".py"):
            abs_path = os.path.abspath(path)
            if abs_path not in already_found_abs_paths:
                already_found_abs_paths.add(abs_path)
                results.append(path)
        else:
            if tolerate_bad_path:
                try: children = os.listdir(path)
                except OSError: return
            else:
                children = os.listdir(path)
            for child in children:
                recurse(os.path.join(path, child), True)

    for path in paths:
        recurse(path, False)
    if len(results) == 0:
        raise OSError("no tests found")
    return results

def import_module(module_path):
    import imp
    old_value = sys.dont_write_bytecode
    try:
        sys.dont_write_bytecode = True

        return imp.load_source(module_path, module_path)
    finally:
        sys.dont_write_bytecode = old_value

if __name__ == "__main__":
    cli()
