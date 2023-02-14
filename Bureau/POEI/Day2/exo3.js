let choix = 0;

function addition(a , b) {
  return (a + b);
}

function soustraction(a , b) {
  return (a - b);
}

function multiplication(a , b) {
  return (a * b);
}

function factorielle(a) {
  let R = 1;
  if (a < 1) {return "Donnez un nombre supérieur ou égal à 1" ;}
  else {
    for (let i = 1 ; i <= a ; i++) {
        R *= i ;}
  return ("Le résultat est : " + R) ;}
}

function Calculatrice(choix) {
    while (choix = 5) { 

    choix = Number(prompt("Que voulez vous faire ?\n"+
    "1- Addition\n"+
    "2- Soustraction\n"+
    "3- Multiplication\n"+
    "4- Factorielle\n"+
    "5- Quitter"));

    switch (choix) {
    case 1:
        a = Number(prompt("Donnez le premier nombre :"));
        b = Number(prompt("Donnez le deuxième nombre :"));
        //console.log("Le résultat est : " + addition(a , b));
        alert("Le résultat est : " + addition(a , b));
        break;

    case 2:
        a = Number(prompt("Donnez le premier nombre :"));
        b = Number(prompt("Donnez le deuxième nombre :"));
        //console.log("Le résultat est : " + soustraction(a , b));
        alert("Le résultat est : " + soustraction(a , b));
        break;

    case 3:
        a = Number(prompt("Donnez le premier nombre :"));
        b = Number(prompt("Donnez le deuxième nombre :"));
        //console.log("Le résultat est : " + multiplication(a , b));
        alert("Le résultat est : " + multiplication(a , b));
        break;

    case 4:
        a = Number(prompt("Donnez un nombre :"));
        //console.log(factorielle( a ));
        alert(factorielle( a ));
        break;

    case 5:
        //console.log("Bye Bye");
        alert("Bye Bye");
        break;

    default:
        //console.log("Merci de réessayer");
        alert("Merci de réessayer");
        break;
    }
}
}

Calculatrice(choix);
 