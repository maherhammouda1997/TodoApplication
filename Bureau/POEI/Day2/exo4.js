function factorielle(n) {
    if (n < 1) {return "Donnez un nombre supérieur ou égal à 1" ;}
    if (n == 0) {return 1;}
    return n * factorielle(n - 1);}
  
N = Number(prompt("Donnez un nombre : "));
R = factorielle(N);
console.log("Le resultat est : "+ R );



//avec un ternaire : 
/*
function factorial(n) {
    return (n === 0) ? 1 : n * factorial(n - 1);
  }
  
  var num = parseInt(prompt("Enter a number: "));
  var result = factorial(num);
  alert("The factorial of " + num + " is " + result);
 */ 