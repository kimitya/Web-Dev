def xyz_there(str):
    if str[:3] == "xyz":
        return True
    for i in range(0, len(str) - 3):
        if (
            str[i] != "."
            and str[i + 1] == "x"
            and str[i + 2] == "y"
            and str[i + 3] == "z"
        ):
            return True
    return False
