# Arrays | Teil 3

- Arbeite mit der Datei `solution.js`, die du in diesem Repository findest.

**1. Wo sind meine Wörter mit vier Buchstaben hin?**
Erstelle eine Funktion namens `isFourLetters`, die ein Array mit Strings annimmt. Gib ein Array mit allen Wörtern im angegebenen Array zurück, die genau vier Buchstaben lang sind.

Beispiele:

- isFourLetters(["John", "James", "Jack", "Jeanne"]) ➞ ["John", "Jack"]
- isFourLetters(["Tomato", "Corn", "Lettuce"]) ➞ ["Corn"]
- isFourLetters(["Dog", "Cat", "Deer"]) ➞ ["Deer"]

**2. Monatsname ausgeben.**
Erstelle eine Funktion namens `getMonthName`, die eine Zahl zwischen 1 und 12 annimmt und den entsprechenden Monatsnamen als String zurückgibt.

Beispiele:

- getMonthName(3) ➞ "March"
- getMonthName(12) ➞ "December"
- getMonthName(6) ➞ "June"

**3. Verstärke die Vielfachen von 4.**
Erstelle eine Funktion namens `amplifyMultiplesOfFour`, die eine ganze Zahl annimmt und ein Array von ganzen Zahlen zurückgibt, die von 1 bis zur angegebenen Zahl aufsteigen. Hierbei gilt Folgendes:

- Für jede Zahl im Array, die gleichmäßig durch 4 geteilt werden kann, wird diese Zahl um 10 multipliziert (d.h. die Zahl wird verzehnfacht).
- Wenn die Zahl nicht gleichmäßig durch 4 geteilt werden kann, wird die Zahl selbst zurückgegeben.
- Die angegebene ganze Zahl ist immer gleich oder größer als 1.

Beispiele:

- amplifyMultiplesOfFour(4) ➞ [1, 2, 3, 40]
- amplifyMultiplesOfFour(3) ➞ [1, 2, 3]
- amplifyMultiplesOfFour(25) ➞ [1, 2, 3, 40, 5, 6, 7, 80, 9, 10, 11, 120, 13, 14, 15, 160, 17, 18, 19, 200, 21, 22, 23, 240, 25]

**4. Einzigartig sein ist cool...**
Erstelle eine Funktion mit dem Namen `unique`, die eine Reihe von Zahlen entgegennimmt und die eindeutigen Zahlen zurückgibt.

Beispiele:

- unique([3, 3, 3, 7, 3, 3]) ➞ [7]
- unique([0, 0, 0.77, 0, 0, 5]) ➞ [0.77, 5]
- unique([0, 1, 1, 1, 1, 1, 1, 1]) ➞ [0]

**5. c4n y0u r34d th15?**
Erstelle eine Funktion namens `code`, die eine Zeichenkette als Argument nimmt und eine kodierte (h4ck3r 5p34k) Version der Zeichenkette zurückgibt.

**PS:** Damit dein Programm richtig funktioniert, sollte die Funktion alle 'a's durch 4, 'e's durch 3, 'i's durch 1, 'o's durch 0 und 's's durch 5 ersetzen.

Beispiele:

- code("javascript is cool") ➞ "j4v45cr1pt 15 c00l"
- code("programming is fun") ➞ "pr0gr4mm1ng 15 fun"
- code("become a coder") ➞ "b3c0m3 4 c0d3r"

## Bonusfragen

**6. Ist es symmetrisch?**
Erstelle eine Funktion namens `isSymmetrical`, die eine Zahl als Argument nimmt und true oder false zurückgibt, je nachdem, ob die Zahl symmetrisch ist oder nicht.

**NB:** Eine Zahl ist symmetrisch, wenn sie gleich ihrem umgekehrten Wert ist.

Beispiele:

- isSymmetrical(7227) ➞ true
- isSymmetrical(12567) ➞ falsch
- isSymmetrical(44444444) ➞ true
- isSymmetrical(9939) ➞ false
- isSymmetrical(1112111) ➞ true

**7. snake_case ➞ camelCase**
Erstelle eine Funktion `toCamelCase()`, die eine Zeichenkette in `snake_case` annimmt und in `camelCase` umwandelt.

Beispiele:

- toCamelCase("hello_world") ➞ "helloWorld"
- toCamelCase("javascript_is_fun") ➞ "javascriptIsFun"

**8. Schweinelatein Übersetzung.**
Erstelle eine Funktion namens `pigLatin`, die einen String von Wörtern nimmt und den ersten Buchstaben jedes Wortes an das Ende der Zeichenkette verschiebt und dann "ay" an das Ende des Wortes anfügt. Dies ist eine Grundform von "Schweinelatein".

- Verschiebe den ersten Buchstaben jedes Wortes an das Ende des Wortes.
- Füge "ay" am Ende des Wortes hinzu.
- Wörter, die mit einem Vokal (a, e, i, o, u) beginnen, fügen stattdessen "way" an das Ende an.

Beispiele:

- pigLatin("Cats are great pets.") ➞ "Atscay areway reatgay etspay."
- pigLatin("Tom got a small piece of pie.") ➞ "Omtay otgay away allsmay iecepay ofway iepay."
- pigLatin("He told us a very exciting tale.") ➞ "Ehay oldtay usway away eryvay excitingway aletay."
