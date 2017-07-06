

// PIERRE FEUILLE CISEAUX
var scorejoueur= 0;
var scoreordi= 0;
var t=["pierre", "feuille", "ciseaux"];
var joueur = "";
var ordi = "";



// lancement du choix du joueur au onclick
function choix(pfc){
  joueur = t[pfc];
  show(joueur); //opacité choix utilisateur
//   for(var a=0; a<9; a++){}
//   choixOrdi(t[0]);
//   choixOrdi(t[1]);
//   choixOrdi(t[2]);  
// }
  choixOrdi(); //opacité choix ordinateur
  }



// Opacité du choix de l'utilisateur
function show(finDeUser){
  var images = document.getElementsByClassName('choice');

  for (var x=0; x < images.length; x++){
    images[x].style.opacity = '0.5';
    }
  document.getElementById('user' + finDeUser).style.opacity = '1';
}



// lancement du choix de l'ordi apres le choix du joueur
function choixOrdi(PiFeCi){
  ordi = t[Math.floor(Math.random(t) * t.length)];
  PiFeCi = ordi;
  voir(ordi);
  jeu();
}



// Opacité du choix de l'ordi
function voir(finDeOrdi){
  var imagesOrdi = document.getElementsByClassName('choiceOrdi');

  for (var y=0; y < imagesOrdi.length; y++){
    imagesOrdi[y].style.opacity = '0.5';
    }
  document.getElementById('ordi' + finDeOrdi).style.opacity = '1';

}



// Affichage du choix écrit de l'ordinateur
function score(finDeChoixOrdi){

  var scoreOrdinateur = document.getElementsByClassName('scoreOrdi');
  for (var z=0; z < scoreOrdinateur.length; z++){
    scoreOrdinateur[z].style.display = "none";
  }
  document.getElementById("choix" + finDeChoixOrdi).style.display = "block";
}

// Affichage du choix écrit de l'utilisateur
function scoreUser(finDeChoixUser){
  var scorePlayer = document.getElementsByClassName('scoreJoueur');
  for (var v=0; v < scorePlayer.length; v++){
    scorePlayer[v].style.display = "none";
  }
  document.getElementById("choice" + finDeChoixUser).style.display = "block";

}
// Affichage du résultat si joueur gagne ou perd la manche
function match(final){
  var gagnePerd = document.getElementsByClassName('resultat');
  for(var w=0; w  < gagnePerd.length; w++){
    gagnePerd[w].style.display = "none";
  }
  document.getElementById("result" + final).style.display = "block";
}

// Lancement du Jeu PIerreFeuilleCiseaux
function jeu(){
if ((scorejoueur<3) && (scoreordi<3))
{ 
  scoreUser(joueur);
  score(ordi);


if (ordi == t[0] && joueur== t[1])
  {
    scorejoueur += 1;
    match("Gagne");
    document.getElementById('pointsJoueur').innerHTML= scorejoueur;
    document.getElementById('pointsOrdi').innerHTML= scoreordi;
  }

else if (ordi == t[0] && joueur == t[2])
  {
    scoreordi += 1;
    match("Perdu");
    document.getElementById('pointsJoueur').innerHTML= scorejoueur;
    document.getElementById('pointsOrdi').innerHTML= scoreordi;

  }

else if (ordi == t[1] && joueur == t[0])
  {
    scoreordi += 1;
    match("Perdu");
    document.getElementById('pointsJoueur').innerHTML= scorejoueur;    
    document.getElementById('pointsOrdi').innerHTML= scoreordi;
  }

else if (ordi == t[1] && joueur == t[2])
 {
  scorejoueur += 1;
  match("Gagne");
  document.getElementById('pointsJoueur').innerHTML= scorejoueur;
  document.getElementById('pointsOrdi').innerHTML= scoreordi;

}

else if (ordi == t[2] && joueur == t[0])
  {
    scorejoueur += 1;
    match("Gagne");
    document.getElementById('pointsJoueur').innerHTML= scorejoueur;
    document.getElementById('pointsOrdi').innerHTML= scoreordi;

  }

else if (ordi == t[2] && joueur == t[1])
  {
    scoreordi += 1;
    match("Perdu");
    document.getElementById('pointsJoueur').innerHTML= scorejoueur;
    document.getElementById('pointsOrdi').innerHTML= scoreordi;

  }

else if (ordi == joueur)
  {
    match("Egal");
    document.getElementById('pointsJoueur').innerHTML= scorejoueur;
    document.getElementById('pointsOrdi').innerHTML= scoreordi;
  }

}

else if (scoreordi === 3)
  {
    alert("ORDINATEUR IS THE WINNER");
  }

else if (scorejoueur === 3)
  {
    alert("BRAVO VOUS AVEZ GAGNE");
  } 
}

























