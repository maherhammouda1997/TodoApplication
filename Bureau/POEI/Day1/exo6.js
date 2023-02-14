let n = parseInt(prompt("entrez un nombre:"));
let premier = true;
let i = 3;

switch (n) {
  case 1:
    premier = false;
    break;
  case 2:
    premier = true;
    break;
  default:
    while (i < n) {
      let k = i++;
      if (n % k === 0) {
        premier = false; 
        break ;
      }
    }
    break;
}

if (premier) {
  console.log(n, "est un premier");
} else {
  console.log(n, "n'est pas premier");
}