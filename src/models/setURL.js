function splitString(stringToSplit, separator, join) {
    var arrayOfStrings = stringToSplit.split(separator);
    return arrayOfStrings.join(join)
}

module.exports = splitString