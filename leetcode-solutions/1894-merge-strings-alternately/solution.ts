function mergeAlternately(word1: string, word2: string): string {
    if (word1 === undefined && word2 === undefined) {
        return "";
    }

    let i = 0;
    let newWord = "";
    let condition = word1.length > word2.length ? word1.length : word2.length;

    while (i < condition) {
        if (word1[i]! === undefined) {
            newWord = newWord + word2[i]!;
        } else if (word2[i]! === undefined) {
            newWord = newWord + word1[i]!;
        } else {
            newWord = newWord + word1[i]! + word2[i];
        }
        i++;
    }

    return newWord;
};
