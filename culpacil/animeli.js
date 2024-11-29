function accumulate(quad) {
    let result = [];
    for (let i = 0; i < quad.length; i++) {
        let rowSum = 0;
        for (let j = 0; j < quad[i].length; j++) {
            rowSum += quad[i][j];
        }
        result.push(rowSum);
    }
    return result;
}
