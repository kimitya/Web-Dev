def cigar_party(cigars, is_weekend):
    return cigars >= 40 if is_weekend else (cigars >= 40 and cigars <= 60)
