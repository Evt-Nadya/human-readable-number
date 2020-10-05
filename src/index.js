module.exports = function toReadable(number) {
    var arr = new Map([
        [0, 'zero'],
        [1, 'one'],
        [2, 'two'],
        [3, 'three'],
        [4, 'four'],
        [5, 'five'],
        [6, 'six'],
        [7, 'seven'],
        [8, 'eight'],
        [9, 'nine'],
        [10, 'ten'],
        [11, 'eleven'],
        [12, 'twelve'],
        [13, 'thirteen'],
        [14, 'fourteen'],
        [15, 'fifteen'],
        [16, 'sixteen'],
        [17, 'seventeen'],
        [18, 'eighteen'],
        [19, 'nineteen'],
        [20, 'twenty'],
        [30, 'thirty'],
        [40, 'forty'],
        [50, 'fifty'],
        [60, 'sixty'],
        [70, 'seventy'],
        [80, 'eighty'],
        [90, 'ninety'],
        [100, 'one hundred'],
        [200, 'two hundred'],
        [300, 'three hundred'],
        [400, 'four hundred'],
        [500, 'five hundred'],
        [600, 'six hundred'],
        [700, 'seven hundred'],
        [800, 'eight hundred'],
        [900, 'nine hundred']
    ]);

    let i = 20;
    while (i < 100) {
        if (number > i && number < i + 10) {
            return arr.get(i) + ' ' + arr.get(number - i);
        }
        i = i + 10;
    }

    let temp = 100;
    while (temp < 1000) {
        if (number > temp && number < temp + 20) {
            return arr.get(temp) + ' ' + arr.get(number - temp);
        }
        temp = temp + 100;
    }

    let x = 100;
    while (x < 1000) {
        let y = x + 20;
        while (y < x + 100) {
            if (number > y && number < y + 10) {
                return arr.get(x) + ' ' + arr.get(y - x) + ' ' + arr.get(number - y);
            }
            y = y + 10;
        }
        x = x + 100;
    }

    let n = 100;
    while (n < 1000) {
        let m = 20;
        while (m < 100) {
            if (number === m + n) {
                return arr.get(n) + ' ' + arr.get(m);
            }
            m = m + 10;
        }
        n = n + 100;
    }

    return arr.get(number);
}
