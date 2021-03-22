function findMatching(drivers, match) {
    return drivers.filter( possibleMatch =>
        possibleMatch.toLowerCase() === match.toLowerCase())
}

function fuzzyMatch(drivers, match) {
    return drivers.filter( possibleMatch =>
        possibleMatch.toLowerCase().indexOf(match.toLowerCase()) === 0)
}

function matchName(drivers, match) {
    return drivers.filter( record => record.name === match )
}