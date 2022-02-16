module.exports = function toReadable(number) {
    const readableNumbers = {
        0: "zero",
        1: "one",
        2: "two",
        3: "three",
        4: "four",
        5: "five",
        6: "six",
        7: "seven",
        8: "eight",
        9: "nine",
        10: "ten",
        11: "eleven",
        12: "twelve",
        13: "thirteen",
        14: "fourteen",
        15: "fifteen",
        16: "sixteen",
        17: "seventeen",
        18: "eighteen",
        19: "nineteen",
        20: "twenty",
        30: "thirty",
        40: "forty",
        50: "fifty",
        60: "sixty",
        70: "seventy",
        80: "eighty",
        90: "ninety",
    };
    const countOnes = (number) => number % (Math.floor(number / 10) * 10);
    const countTens = (number) => Math.floor(number / 10) * 10;
    const countHundreds = (number) => Math.floor(number / 100);

    return number < 20
        ? readableNumbers[number]
        : number < 100
        ? `${readableNumbers[countTens(number)]}${
              number % 10 !== 0 ? " " + readableNumbers[countOnes(number)] : ""
          }`
        : `${readableNumbers[countHundreds(number)]} hundred${
              number % 100 >= 20
                  ? " " + readableNumbers[countTens(number % 100)]
                  : number % 100 >= 10 && number % 100 < 20
                  ? " " + readableNumbers[number % 100]
                  : ""
          }${
              !Number.isInteger(number / 10) &&
              !(number % 100 > 10 && number % 100 < 20)
                  ? " " + readableNumbers[countOnes(number)]
                  : ""
          }`;
};
