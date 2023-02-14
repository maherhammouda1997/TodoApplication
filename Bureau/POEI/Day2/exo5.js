function Somme(Tab) {
    let S = 0;
    for (let i = 0; i < Tab.length; i++) {
      S += Tab[i];
    }
    return (S / Tab.length);

  }
  
  function Max(Tab) {
      let max = Tab[0];
  
      for (let i = 1; i < Tab.length; i++) {
          if (Tab[i] > max) {
              max = Tab[i];
          }
      }
      return max ;
  }
  
  function Min(Tab) {
      let min = Tab[0];
  
      for (let i = 1; i < Tab.length; i++) {
          if (Tab[i] < min) {
              min = Tab[i];
          }
      }
      return min ;
  }


let taille_tab = parseInt(prompt("Combien de Tab voulez vous saisir?"));
let Tab = [];

for (let i = 0; i < taille_tab; i++) {
  let note = parseFloat(prompt("Entrez la note : " +(i + 1)));
  Tab.push(note);
}

console.log("La moyenne des Tab est: " +Somme(Tab));
console.log("La note la plus haute est: " +Max(Tab));
console.log("La note la plus basse est: " +Min(Tab));
console.table(Tab);