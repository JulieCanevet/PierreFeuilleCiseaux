

// PIERRE FEUILLE CISEAUX
var scorejoueur= 0;
var scoreordi= 0;
var t=["pierre", "feuille", "ciseaux"];
var joueur = "";
var ordi = "";

var pseudo = prompt("Quel est votre nom ?");
document.getElementById('pseudo').innerHTML = pseudo;
alert("Cliquez sur l'image correspondante à votre choix");
// lancement du choix du joueur au onclick
function choix(pfc){
  joueur = t[pfc];
  show(joueur); //opacité choix utilisateur
  roulette();
  }


// Opacité du choix de l'utilisateur
function show(finDeUser){
  var images = document.getElementsByClassName('choice');

  for (var x=0; x < images.length; x++){
    images[x].style.opacity = '0.5';
    }
  document.getElementById('user' + finDeUser).style.opacity = '1';
}


  //roulette
  function roulette(){
    var rouleroulette = setInterval(roulettes, 200);
      

      function roulettes(){
        var toutes = document.getElementsByClassName("choiceOrdi");
        for (var x=0; x < toutes.length; x++){
          toutes[x].style.opacity = '0.5';
        }
        var youpi = t[Math.floor(Math.random(t) * t.length)];

        document.getElementById("ordi" + youpi).style.opacity = '1';
      }

    setTimeout(stoproulette,2800);
      function stoproulette() {
      clearInterval(rouleroulette);
       var toutes = document.getElementsByClassName("choiceOrdi");
        for (var x=0; x < toutes.length; x++){
          toutes[x].style.opacity = '0.5';
        }
      choixOrdi();
    }
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

function score(){
  document.getElementById('choixpierre').innerHTML = ordi;
}


// Affichage du choix écrit de l'utilisateur
function scoreUser(){
  document.getElementById('choicepierre').innerHTML = joueur;
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
    document.getElementById('result').innerHTML = "Vous gagnez cette manche";
    document.getElementById('pointsJoueur').innerHTML= scorejoueur;
    document.getElementById('pointsOrdi').innerHTML= scoreordi;
  }

else if (ordi == t[0] && joueur == t[2])
  {
    scoreordi += 1;
    document.getElementById('result').innerHTML = "Vous perdez cette manche";
    document.getElementById('pointsJoueur').innerHTML= scorejoueur;
    document.getElementById('pointsOrdi').innerHTML= scoreordi;

  }

else if (ordi == t[1] && joueur == t[0])
  {
    scoreordi += 1;
    document.getElementById('result').innerHTML = "Vous perdez cette manche";
    document.getElementById('pointsJoueur').innerHTML= scorejoueur;    
    document.getElementById('pointsOrdi').innerHTML= scoreordi;
  }

else if (ordi == t[1] && joueur == t[2])
 {
  scorejoueur += 1;
  document.getElementById('result').innerHTML = "Vous gagnez cette manche";
  document.getElementById('pointsJoueur').innerHTML= scorejoueur;
  document.getElementById('pointsOrdi').innerHTML= scoreordi;

}

else if (ordi == t[2] && joueur == t[0])
  {
    scorejoueur += 1;
    document.getElementById('result').innerHTML = "Vous gagnez cette manche";
    document.getElementById('pointsJoueur').innerHTML= scorejoueur;
    document.getElementById('pointsOrdi').innerHTML= scoreordi;

  }

else if (ordi == t[2] && joueur == t[1])
  {
    scoreordi += 1;
    document.getElementById('result').innerHTML = "Vous perdez cette manche";
    document.getElementById('pointsJoueur').innerHTML= scorejoueur;
    document.getElementById('pointsOrdi').innerHTML= scoreordi;

  }

else if (ordi == joueur)
  {
    document.getElementById('result').innerHTML = "Egalité";
    document.getElementById('pointsJoueur').innerHTML= scorejoueur;
    document.getElementById('pointsOrdi').innerHTML= scoreordi;
  }

}

else if (scoreordi === 3)
  {
    document.getElementById("spirale").style.display = "block";
    alert("ORDINATEUR IS THE WINNER");
  }

else if (scorejoueur === 3)
  {
    document.getElementById("paillettes").style.display = "block";
    alert("BRAVO VOUS AVEZ GAGNE");
  } 
}




// Lacher de ballons
// function myMove (){
//   var elem = document.getElementById('ballons');
//   var position = 0;
//   var id = setInterval(frame, 5);
//   function frame () {
//     if (position == 400){
//       clearInterval(id);
//     } else {
//       position --;
//       elem.style.top = position + 'px';
//       elem.style.left = position + 'px';
//     }
//   }
// }




















