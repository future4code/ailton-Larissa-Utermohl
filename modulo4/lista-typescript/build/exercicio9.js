function getAnagrams(word) {
    let numbersToFactor = [];
    for (let i = 0; i < word.length; i++) {
        numbersToFactor.push(word.length - i);
    }
    let result = 1;
    for (let i = 0; i < numbersToFactor.length; i++) {
        result = result * numbersToFactor[i];
    }
    return result;
}
console.log(getAnagrams('mesa'));
//# sourceMappingURL=exercicio9.js.map