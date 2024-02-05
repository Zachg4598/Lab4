
function spinRoulette() {
  const numbers = ["0", "34", "10", "21", "28", "4", "18", "9", "27", "22", "12", "3", "17", "20", "11", "33", "2", "10", "32", "00", "15", "8", "25", "1", "31", "20", "14", "30", "7", "24", "29", "35", "6", "13", "23", "19", "5", "36"];
  const index = Math.floor(Math.random() * numbers.length);
  const number = numbers[index];
  let color;
  if (number === "0" || number === "00") {
      color = number === "0" ? "Rouge" : "Noir";
  } else {
      color = index % 2 === 0 ? "Noir" : "Rouge";
  }
  let evenOdd;
  if (number === "0" || number === "00") {
      evenOdd = number === "0" ? "Impair" : "Pair";
  } else {
      evenOdd = parseInt(number) % 2 === 0 ? "Pair" : "Impair";
  }
  let range;
  if (number === "0") {
      range = "Manque";
  } else if (number === "00") {
      range = "Passe";
  } else {
      range = parseInt(number) <= 18 ? "Manque" : "Passe";
  }
  console.log(`Number: ${number}, Color: ${color}, Even/Odd: ${evenOdd}, Range: ${range}`);
}

window.onload = function() {
  spinRoulette();
};
