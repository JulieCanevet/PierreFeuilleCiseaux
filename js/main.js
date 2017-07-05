

// PIERRE FEUILLE CISEAUX
var scorejoueur= 0;
var scoreordi= 0;
var t=["pierre", "feuille", "ciseaux"];
var joueur="";

function show(oui){
  var images = document.getElementsByClassName('choice');

  for (var x=0; x < images.length; x++){
    images[x].style.opacity = '0.5';
    }
  document.getElementById('user' + oui).style.opacity = '1';

}

var test = "";
  function choix(pfc){
  joueur = t[pfc];
  test = t[pfc];
  show(test);
  jeu();
  }

function jeu(){
if ((scorejoueur<3) && (scoreordi<3))
{ 


var ordi = t[Math.floor(Math.random(t) * t.length)];
 
alert(ordi);

if (ordi.toLowerCase() == t[0] && joueur.toLowerCase() == t[1])
  {
    scorejoueur += 1;
    alert("Vous marquez 1 point");
  }

else if (ordi.toLowerCase() == t[0] && joueur.toLowerCase() == t[2])
  {
    scoreordi += 1;
    alert("Ordinateur marque 1 point");
  }

else if (ordi.toLowerCase() == t[1] && joueur.toLowerCase() == t[0])
  {
    scoreordi += 1;
    alert("Ordinateur marque 1 point");
  }

else if (ordi.toLowerCase() == t[1] && joueur.toLowerCase() == t[2])
 {
  scorejoueur += 1;
  alert("Vous marquez 1 point");
}

else if (ordi.toLowerCase() == t[2] && joueur.toLowerCase() == t[0])
  {
    scorejoueur += 1;
    alert("Vous marquez 1 point");
  }

else if (ordi.toLowerCase() == t[2] && joueur.toLowerCase() == t[1])
  {
    scoreordi += 1;
    alert("Ordinateur marque 1 point");
  }

else if (ordi.toLowerCase() == joueur.toLowerCase())
  {alert("Egalité");}


// else
// {
//   alert("Saisie incorrecte");
// }

//  if (joueur.toLowerCase() == t[0]){
//         document.getElementById("pierreUser").style.opacity="1";
//     	}
// if (joueur.toLowerCase() == t[1]){
//         document.getElementById("feuilleUser").style.opacity="1";
//     	}
// if (joueur.toLowerCase() == t[2]){
//        document.getElementById("ciseauxUser").style.opacity="1";
//     	}


//  if (ordi.toLowerCase() == t[0]){
//         document.getElementById("pierreOrdi").style.display="1";
//     	}
//  if (ordi.toLowerCase() == t[1]){
//         document.getElementById("feuilleOrdi").style.display="1";
//     	}
// if (ordi.toLowerCase() == t[2]){
//        document.getElementById("ciseauxOrdi").style.display="1";
//     	}

}

else if (scoreordi === 3)
    {alert("ORDINATEUR IS THE WINNER");}

else if (scorejoueur === 3)
    {alert("BRAVO VOUS AVEZ GAGNE");} 
}
