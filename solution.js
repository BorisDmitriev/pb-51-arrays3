// Create your solutions here
//1
const isFourLetters = arr => {
    return arr.filter(word => word.length === 4);
}


console.log(isFourLetters(["John", "James", "Jack", "Jeanne"]));// ➞ ["John", "Jack"]
console.log(isFourLetters(["Tomato", "Corn", "Lettuce"]));// ➞ ["Corn"]
console.log(isFourLetters(["Dog", "Cat", "Deer"]));// ➞ ["Deer"]


//2
const getMonthName = num => {
    const months = 'January February March April May June July August September October November December'.split(" ");

    return months.find(month => months[num - 1] === month)
}

console.log(getMonthName(3));  //➞ "March"
console.log(getMonthName(12)); //➞ "December"
console.log(getMonthName(6));  //➞ "June"

//3
const amplifyMultiplesOfFour = int => {
    const numbers = [];
    const result = [];
    for (let i = 1; i <= int; i++) {
        numbers.push(i);
    }
    numbers.forEach(num => {
        if (num % 4 === 0) result.push(num * 10);
        else result.push(num);
    });
    return result;
}

console.log(amplifyMultiplesOfFour(4));      //➞ [1, 2, 3, 40]
console.log(amplifyMultiplesOfFour(3));     //➞ [1, 2, 3]
console.log(amplifyMultiplesOfFour(25));   //➞ [1, 2, 3, 40, 5, 6, 7, 80, 9, 10, 11, 120, 13, 14, 15, 160, 17, 18, 19, 200, 21, 22, 23, 240, 25]


//4
const unique = nums => {

    const occurencies = nums.reduce((acc, cur) => {
        if (acc[cur]) acc[cur]++;
        else acc[cur] = 1;
        return acc;
    }, {});    //  output => { '0': 4, '5': 1, '0.77': 1 }


    const arrayOfOccurencies = Object.entries(occurencies);  //  output => [ [ '0', 4 ], [ '5', 1 ], [ '0.77', 1 ] ]

    let sortAndSliceLast = arrayOfOccurencies.sort((prev, next) => prev[1] > next[1] ? 1 : -1).slice(0, arrayOfOccurencies.length - 1);

    const result = sortAndSliceLast.map(arr => Number(arr[0]));

    return result;


    // const theMostOccurentNum =  arrayOfOccurencies.reduce( (acc, cur) => acc[1]>cur[1] ? acc:cur )[0];  // '0'

    // let result = arrayOfOccurencies.filter( arr => arr[0] !== theMostOccurentNum )
    //                          .map( arr => Number( arr[0] ) );

    // return result.reverse();  //=> reverse() for codebody                       
};

console.log(unique([3, 3, 3, 7, 3, 3]));         // ➞ [7]
console.log(unique([0, 0, 0.77, 0, 0]));   // 0.77
console.log(unique([0, 0, 0.77, 0, 0, 5]));     //➞ [0.77, 5]
console.log(unique([0, 1, 1, 1, 1, 1, 1, 1]));   //➞ [0]


//5
const code = str => {
    const replace = {
        'a': '4',
        'e': '3',
        'i': '1',
        'o': '0',
        's': '5'
    };

    let result = [];

    str.split(" ").forEach(word => result.push(word.split("").map(char => replace[char] ? replace[char] : char).join("")));

    return result.join(" ");
};

console.log(code("javascript is cool"));//➞ "j4v45cr1pt 15 c00l"
console.log(code("programming is fun"));//➞ "pr0gr4mm1ng 15 fun"
console.log(code("become a coder"));//➞ "b3c0m3 4 c0d3r"


//Bonus 1
const isSymmetrical = num => {
    return ("" + num).split("").reverse().join("") == num;
}


console.log(isSymmetrical(7227));      //➞ true
console.log(isSymmetrical(12567));    //➞ false
console.log(isSymmetrical(44444444));  //➞ true
console.log(isSymmetrical(9939));     //➞ false
console.log(isSymmetrical(1112111));   //➞ true


//Bonus 2
const toCamelCase = str => {
    const strArr = str.split("_");
    return strArr.map((word, index) => index > 0 ? word[0].toUpperCase() + word.slice(1, word.length) : word).join("");
}

console.log(toCamelCase("hello_world"));      // ➞ "helloWorld"
console.log(toCamelCase("javascript_is_fun"));// ➞ "javascriptIsFun"

//Bonus 3
const pigLatin = str => {
    const vowels = 'aeiou';
    const strArr = str.toLowerCase().split(' ');

    return strArr.map((word, index) => {
        if (index === 0) {
            if (vowels.includes(word[0])) {
                return word[0].toUpperCase() + word.slice(1, word.length) + 'way';
            } else {
                return word[1].toUpperCase() + word.slice(2, word.length) + word[0].toLowerCase() + 'ay';
            }
        } else if (index === strArr.length - 1) {
            return word.slice(1, word.length-1) + word[0] + 'ay' + word[word.length-1];
        } else {
            if (vowels.includes(word[0])) {
                return word + 'way';
            } else {
                return word.slice(1, word.length) + word[0] + 'ay';
            }
        }
    }).join(' ');
}

console.log(pigLatin("He told us a very exciting tale.")); //➞ "Ehay oldtay usway away eryvay excitingway aletay."
