function timeWord(digital) {
    if (digital == "00:00") return "midnight";
    if (digital == "12:00") return "noon";

    let split = digital.split(":");

    const hours = {
        0: "twelve",
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
        13: "one",
        14: "two",
        15: "three",
        16: "four",
        17: "five",
        18: "six",
        19: "seven",
        20: "eight",
        21: "nine",
        22: "ten",
        23: "eleven"
    }
    const tens = {
        0: "oh",
        2: "twenty",
        3: "thirty",
        4: "forty",
        5: "fifty"
    }
    const ones = {
        0: "o'clock",
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
        50: "fifty"
    }

    if (split[1][0] == "1" || split[1][1] == "0") {
        // if minutes is in teen numbers, or even tens, cant be split, make another array
        let times = [Number(split[0]), Number(split[1])];
        if (times[0] < 12) {
            // return AM if hours less than noon
            const result = `${hours[times[0]]} ${ones[times[1]]} am`;
            return result;
        }
        // PM afternoon
        const result = `${hours[times[0]]} ${ones[times[1]]} pm`;
        return result;
    };

    let times = [Number(split[0]), Number(split[1][0]), Number(split[1][1])]
    if (times[0] < 12) {
        // same thing if AM
        const result = `${hours[times[0]]} ${tens[times[1]]} ${ones[times[2]]} am`
        return result;
    }
    const result = `${hours[times[0]]} ${tens[times[1]]} ${ones[times[2]]} pm`
    return result;
};

module.exports = timeWord;