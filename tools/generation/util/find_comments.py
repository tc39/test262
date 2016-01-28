def find_comments(source):
    '''Parse input string describing JavaScript source and yield dictionaries
    describing the JavaScript comments in the order they appear in the source.

    Each dictionary defines the following attributes:

    - source: the source text of the comment
    - firstchar: the zero-indexed position of the token that begins the coment
    - lastchar: the zero-indexed position of the token that closes the comment
    - lineno: the zero-indexed offset of the line on which the comment appears
    '''
    in_string = False
    in_s_comment = False
    in_m_comment = False
    follows_escape = False
    comment = ''
    lineno = 0

    for idx in xrange(len(source)):
        if source[idx] == '\n':
            lineno += 1

        # Within comments and strings, any odd number of back-slashes begins an
        # escape sequence.
        if source[idx - 1] == '\\':
            follows_escape = not follows_escape
        else:
            follows_escape = False

        if in_s_comment:
            if source[idx] == '\n':
                in_s_comment = False
                yield dict(
                    source=comment,
                    firstchar=idx - len(comment) - 2,
                    lastchar=idx,
                    lineno=lineno)
        elif in_m_comment:
            if source[idx] == '*' and source[idx + 1] == '/':
                in_m_comment = False
                yield dict(
                    source=comment,
                    firstchar=idx - len(comment) - 2,
                    lastchar=idx + 2,
                    lineno=lineno)
        elif in_string:
            if source[idx] == in_string and not follows_escape:
                in_string = False
            elif source[idx] == '\n' and in_string != '`' and not follows_escape:
                in_string = False
            continue

        if in_m_comment or in_s_comment:
            comment += source[idx]
            continue

        in_m_comment = source[idx - 1] == '/' and source[idx] == '*'
        in_s_comment = source[idx - 1] == '/' and source[idx] == '/'

        if in_m_comment or in_s_comment:
            comment = ''
        elif source[idx] == '\'' or source[idx] == '"' or source[idx] == '`':
            in_string = source[idx]
