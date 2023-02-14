let N_matieres = parseInt(prompt("Combien de matières ?"));
let matieres = [];

for (let i = 0; i < N_matieres; i++) {
  let matiere = prompt("Entrez le nom de la matière " +(i + 1));
  let N_notes = parseInt(prompt("Combien de notes pour " + matiere));
  let notes = [];



  for (let j = 0; j < N_notes; j++) {
    let note = parseFloat(prompt("Entrez la note " +(j + 1) + "pour" + matiere));
    notes.push(note);}
  matieres.push({ matiere, notes });
}



function somme(notes) {
    let S = 0;
    for (let i = 0; i < notes.length; i++) {
      S += notes[i];
    }
    return S;
  }
  
  function moyenne(notes) {
    return somme(notes) / notes.length;
  }
  
  function min(notes) {
    let min = notes[0];
    for (let i = 0; i < notes.length; i++) {
      if (notes[i] < min) {
        min = notes[i];
      }
    }
    return min;
  }
  
  function max(notes) {
    let max = notes[0];
    for (let i = 0; i < notes.length; i++) {
      if (notes[i] > max) {
        max = notes[i];
      }
    }
    return max;
  }
  
  for (let i = 0; i < matieres.length; i++) {
    let matiere = matieres[i].matiere;
    let notes = matieres[i].notes;
  
    let S = somme(notes);
    let moyenne_ = moyenne(notes);
    let minimum = min(notes);
    let maximum = max(notes);
  
    console.log("La moyenne pour " + matiere +" est " + moyenne_);
    console.log("La note maximale pour " + matiere +" est " + maximum);
    console.log("La note minimale pour"  + matiere +" est " + minimum);
  }
  console.table(matieres);
  