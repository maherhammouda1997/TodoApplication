let num = prompt("donnez un nombre");

if (num < 1) {
    console.log(num, "n'est pas premier") ;
} 

if (num == 1) {
    console.log(num, "n'est pas premier") ;
} 

else if (num == 2) {
    console.log(num, "est premier") ;
} 

else {
  for (let i = 2 ; i < num ; i++) {
    if (num % i == 0) {
        console.log(num, "n'est pas premier") ;
        break ;
    }
    console.log(num, "est premier") ;
  }
}