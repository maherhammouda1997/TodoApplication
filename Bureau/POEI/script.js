let nbDisques = prompt('Entrez le nombre de disques :')


function nbrTour(n) {
    return nbrTour = 2**n -1
 }

function deplacerDisque(pileDepart, pileArrivee) {
  pileArrivee.push(pileDepart.pop())
}

function tourHanoi(n, depart, arrivee, intermediaire) {
  if (n > 0) {
    tourHanoi(n - 1, depart, intermediaire, arrivee)
    console.log('Déplacer le disque ' + n + ' de ' + depart + ' vers ' + arrivee,)
    deplacerDisque(eval(depart), eval(arrivee))
    console.log('Pile A : ' + A.length + ', Pile B : ' + B.length + ', Pile C : ' + C.length)
    tourHanoi(n - 1, intermediaire, arrivee, depart)
  }
} // Initialiser les piles A, B, C avec le nombre de disques spécifié
let A = []

for (let i = nbDisques; i >= 1; i--) {
        A.push(i)
    }

let B = []
let C = []

tourHanoi(nbDisques, 'A', 'C', 'B')
//console.table(B)
//console.table(C)

let mustTurn = nbrTour(nbDisques)
console.log(`Le nombre de tour nécessaire pour ${nbDisques} disques est de ${mustTurn} mouvements`)