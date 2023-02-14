let n = prompt("donnez un nombre") ;
let R = 1 ;

if (n<1) {console.log("donnez un nombre supérieur ou égal à 1") ;}

else {
    for (let i = 1 ; i <= n ; i++) {
        R *= i ;
    }
    console.log("Le factoriel de", n, "est", R) ; 
}