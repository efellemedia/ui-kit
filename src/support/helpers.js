function objectIsEmpty(obj) {
    for (let x in obj) { return false; }

    return true;
}