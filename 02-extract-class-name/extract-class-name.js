function extractClassName(sessionTitle) {
  // constante für die Monatszahl
  const monthNum = {
    Januar: "01",
    Februar: "02",
    März: "03",
    Maerz: "03",
    April: "04",
    Mai: "05",
    Juni: "06",
    Juli: "07",
    August: "08",
    September: "09",
    Oktober: "10",
    November: "11",
    Dezember: "12",
  };

  // Hier wird nach einer Vierstelligenzahl und den Monaten gesucht, \d = sucht nachzahlen von 0-9, {4} für vierstellige zahl, (aufzählung der monate)/ nach monaten;
  const regex =
    /Class (\d{4}) (Januar|Februar|März|Maerz|April|Mai|Juni|Juli|August|September|Oktober|November|Dezember)/;
  const match = sessionTitle.match(regex);
  //console.log(match); //output ist ["Class Year und Monat", "year", "month"]}

  //Jetzt müssen die einzelnen suchergebnisse miteinander kombiniert werden, mithilfe der Template-Literals `${}`. In die geschweifte klammer werden variablen hinzugefügt, die wir vorher,
  //definiert und gesucht haben mit hilfe der .match methode und Regulären Ausdrücke(Regular Expression oder regex).
  if (match) {
    const year = match[1];
    const monthName = match[2];
    const monthNumber = monthNum[monthName];
    return `${year}-${monthNumber}`;
  } else {
    return null;
  }
}

console.log(extractClassName("Live-Session Class 2022 Januar"));
console.log(extractClassName("Live-Session Class 2023 Dezember"));
console.log(extractClassName("Live-Session Class 2023 Januar"));
console.log(extractClassName("Live-Session  2023 Januar"));
console.log(extractClassName("Live-Session Class 20233 Januar"));
console.log(extractClassName("Live-Session Class 1994 Juli"));
