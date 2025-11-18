# Copyright (C) 2025 André Bargull. All rights reserved.
# This code is governed by the BSD license found in the LICENSE file.

import glob
import logging
import os
import re
import sys
from parser import SpecParser

from clause import Clause
from generator import generate_test, make_tests_for

from config import cfg

logger = logging.getLogger("test262")


def initLogger():
    # Stream handler writing to |sys.stderr| for warnings and errors.
    std_err = logging.StreamHandler(stream=sys.stderr)
    std_err.setLevel(logging.WARNING)
    std_err.setFormatter(logging.Formatter("%(levelname)s - %(message)s"))

    # Stream handler writing to |sys.stdout| for info and debug messages.
    std_out = logging.StreamHandler(stream=sys.stdout)
    std_out.setLevel(logging.DEBUG)
    std_out.addFilter(lambda record: record.levelno <= logging.INFO)
    std_out.setFormatter(logging.Formatter("%(message)s"))

    logger.addHandler(std_err)
    logger.addHandler(std_out)


def read_spec_file(file_path):
    logger.debug(f"Read spec file: {os.path.basename(file_path)}")

    with open(file_path, encoding="utf-8") as f:
        text = f.read()

    # Read the spec html file.
    parser = SpecParser()
    parser.feed(text)
    parser.close()

    # Assert all tags are properly closed.
    assert parser.current_element == parser.root_element

    # Convert from elements to clauses.
    return make_clause(None, parser.root_element)


def ignore_clause(elem):
    for x, y in (("emu-alg", "ins"), ("ins", "emu-alg")):
        emu_alg = next(elem.find_elements(x), None)
        if emu_alg and next(emu_alg.find_elements(y), None):
            return True
    return False


def make_clause(parent_clause, elem):
    """Create a new clause for |elem|."""
    clause = Clause(parent_clause, elem)

    for tag in ("emu-clause", "emu-annex"):
        for child_elem in elem.find_elements(tag):
            if ignore_clause(child_elem):
                continue
            make_clause(clause, child_elem)

    for ins in elem.find_elements("ins"):
        for elem_clause in ins.find_elements("emu-clause"):
            make_clause(clause, elem_clause)

    return clause


def collect_global_properties(clause):
    """Generator yielding all properties reachable from |clause|."""
    for sc in clause.subclauses:
        if sc.is_operation():
            continue
        if sc.is_function():
            (idref, _, _, _, _) = sc.function_properties()
            yield idref.property_key()
        elif sc.is_value():
            (idref, _, _) = sc.value_properties()
            yield idref.property_key()
        elif len(sc.subclauses) > 0:
            yield from collect_global_properties(sc)
        else:
            logger.warning(f"Unhandled sub-clause: {sc.header()}")


re_global_property = re.compile(
    r"the initial value of the \*\"(?P<name>\w+)\"\* property of the global object"
)


def global_properties(clause):
    """Return a set of all global properties (recursively) defined in |clause|."""
    result = set()

    # Inline global property definition.
    for ps in (clause.property_list(), clause.property_paragraphs()):
        for p in ps:
            if m := re_global_property.search(p):
                result.add(m.group("name"))

    # Recursively search for global property definitions.
    for sc in clause.subclauses:
        if sc.header().endswith("Properties of the Global Object"):
            result = result | set(collect_global_properties(sc))
        else:
            result = result | global_properties(sc)

    return result


def target_clauses(clause):
    """Iterator over all target clauses reachable from |clause|."""

    if clause.has_properties():
        # Any clause with (accessible) properties is a relevant target.
        if clause.is_accessible():
            yield clause
    elif clause.has_functions() or clause.has_values() or clause.has_accessors():
        # Additionally check target name to skip over clauses which have function-
        # or value-like definitions, but aren't definitions for built-in types.
        if clause.is_accessible():
            if clause.target_name() is not None:
                yield clause
            elif clause.parent is None:
                yield clause
            else:
                logger.debug(f"skip: {clause}")

    # Property and constructor clauses reachable from |clause| don't need to be
    # tracked explicitly.
    properties = list(clause.property_clauses())
    constructors = list(clause.constructor_clauses())

    for sub in clause.subclauses:
        if sub in properties or sub in constructors:
            continue
        yield from target_clauses(sub)


def write_test_files(root_clause, global_props):
    """Write test files for all target clauses reachable from |root_clause|."""

    # Find relevant targets clauses.
    targets = [clause for clause in target_clauses(root_clause)]
    if len(targets) == 0:
        return

    for target in targets:
        for test in make_tests_for(target, global_props):
            if not cfg.is_included(test):
                continue

            if cfg.is_excluded(test):
                logger.debug(f"SKIP - {test.idref.to_get()} excluded")
                continue

            (file_path, test_content) = generate_test(test, global_props)

            if cfg.dry_run:
                continue

            os.makedirs(os.path.dirname(file_path), exist_ok=True)

            with open(file_path, "w", encoding="utf-8") as f:
                f.write(test_content)


def main():
    initLogger()

    level = {
        "debug": logging.DEBUG,
        "info": logging.INFO,
        "warning": logging.WARNING,
        "warn": logging.WARNING,
        "error": logging.ERROR,
    }[cfg.log]

    logger.setLevel(level)

    logger.info("Generate test262 property tests with options:")

    for file_or_dir in cfg.globals:
        logger.info(f"  globals path: {file_or_dir}")
    logger.info(f"  spec: {cfg.spec}")

    if cfg.dry_run:
        logger.info(f"  dry-run: {cfg.dry_run}")
    if cfg.include:
        logger.info(f"  include: {cfg.include}")
    if cfg.exclude:
        logger.info(f"  exclude: {cfg.exclude}")
    if cfg.features:
        logger.info(f"  features: {cfg.features}")
    if cfg.out:
        logger.info(f"  out: {cfg.out}")

    # Check if optional output directory is valid. Also don't allow writing
    # outside of the test262 directory.
    if cfg.out:
        test262_test = os.path.join(cfg.test262_dir, "test")
        assert os.path.isabs(test262_test) and os.path.isdir(test262_test)

        out_path = os.path.join(test262_test, os.path.normpath(cfg.out))

        actual_path = os.path.commonpath((test262_test, os.path.realpath(out_path)))
        if actual_path != test262_test:
            logger.error(
                f"Can't write outside the test262/test directory to '{cfg.out}'!"
            )
            return

        if os.path.exists(out_path) and not os.path.isdir(out_path):
            logger.error(f"Can't overwrite existent non-directoy file '{cfg.out}'!")
            return

    # First check all input files exist.
    for file_or_dir_list in (cfg.globals, cfg.spec):
        for file_or_dir in file_or_dir_list:
            file_or_dir = os.path.expanduser(file_or_dir)  # noqa: PLW2901
            if not os.path.isdir(file_or_dir) and not os.path.isfile(file_or_dir):
                logger.error(f"{file_or_dir} does not exist")
                return

    def read_file_or_directory(file_or_dir_list):
        for file_or_dir in file_or_dir_list:
            file_or_dir = os.path.expanduser(file_or_dir)  # noqa: PLW2901
            if os.path.isfile(file_or_dir):
                yield read_spec_file(file_or_dir)
            else:
                assert os.path.isdir(file_or_dir)
                logger.debug(f"Read spec directory: {file_or_dir}")

                for file_name in glob.glob("*.html", root_dir=file_or_dir):
                    file_path = os.path.join(file_or_dir, file_name)
                    yield read_spec_file(file_path)

    # Read all spec files defining globals.
    global_props = set()
    for root_clause in read_file_or_directory(cfg.globals):
        global_props = global_props | global_properties(root_clause)

    # Read all spec files.
    root_clauses = list(read_file_or_directory(cfg.spec))

    # Add globals from spec files.
    for root_clause in root_clauses:
        global_props = global_props | global_properties(root_clause)

    logger.debug(f"global_props: {sorted(global_props)}")

    # Generate property test files.
    for root_clause in root_clauses:
        write_test_files(root_clause, global_props)

    logger.debug("done!")


if __name__ == "__main__":
    import argparse

    print(__file__)

    parser = argparse.ArgumentParser(description="test262 property test generator")

    parser.add_argument(
        "-n",
        "--dry-run",
        action="store_true",
        help="Don't write any output files.",
    )

    parser.add_argument(
        "--include",
        metavar="GLOB",
        help="Include properties matching the pattern GLOB. Accepts a comma separated list.",
    )

    parser.add_argument(
        "--exclude",
        metavar="GLOB",
        help="Exclude properties matching the pattern GLOB. Accepts a comma separated list.",
    )

    parser.add_argument(
        "--log",
        default="info",
        choices=["debug", "info", "warning", "warn", "error"],
        help="Log level",
    )

    parser.add_argument(
        "--features",
        help="Add FEATURES to the features frontmatter. Accepts a comma separated list.",
    )

    parser.add_argument(
        "--globals",
        nargs="*",
        action="extend",
        default=[],
        help="Paths to spec files or directories defining global properties.",
    )

    parser.add_argument(
        "--out",
        metavar="PATH",
        help="Write generated files to PATH, which is a path relative to test262/test.",
    )

    parser.add_argument(
        "spec",
        nargs="+",
        action="extend",
        help="Paths to a spec files or directories.",
    )

    parser.set_defaults(func=main)

    args = parser.parse_args(namespace=cfg)
    args.func()
