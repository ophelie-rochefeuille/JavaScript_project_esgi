// initialisation des letiables
/* jshint expr: true */
let centi = 0;
let mili = 0;
let sec = 0;
let min = 0;
let hrs = 0;
let min_;
let sec_;
let afficher;
let compteur;
const hapticButton = document.querySelector('#toggle-haptic');
let hapticEnabled = false;

hapticButton.addEventListener('click', toggleHaptic);

// affichage du compteur à 0
document.getElementById('time').innerHTML = "0" + min + ":" + "0" + sec + ":" + "0" + mili;



function chrono() {
    setInterval(function (){
        mili++;
            if (mili > 9) {
                mili = 0;
            }
    }, 1);
    
    centi++;
    centi*10;//=======pour passer en dixièmes de sec
    //=== on remet à zéro quand on passe à 1seconde
    if (centi > 9) {
        centi = 0;
        sec++;
    }  

    if (sec >= 60) {
        sec = 0;
        min++;
        if (min >= 60) {
            min = 0;
            hrs++;
        }
    }

    /*if (sec < 10) {
        sec_ = "0" + sec;
    }
    else {
        sec_ = sec;
    }*/
        
    afficher = (hrs > 9 ? hrs : "0" + hrs)+ ":" + (min > 9 ? min : "0" + min)+ ":" +(sec > 9 ? sec : "0" + sec) + ":" + centi + mili;
    document.getElementById("time").innerHTML = afficher;
    
    reglage = window.setTimeout("chrono();",100);
} 


function debut()  //== Activation et désactivation des boutons
{
    if (hapticEnabled) playHapticFeedback();
    document.parametre.lance.disabled = "disabled";
    document.parametre.pause.disabled = "";
    document.parametre.zero.disabled = "";
    document.parametre.intermediaire.disabled = "";
    //document.parametre.rappel.disabled = "";
}
function arret() 
{	
    if (hapticEnabled) playHapticFeedback();
    window.clearTimeout(reglage);
    document.parametre.lance.disabled = "";
    document.parametre.pause.disabled = "disabled";
    document.parametre.zero.disabled = "";
    document.parametre.intermediaire.disabled = "";
    //document.parametre.rappel.disabled = "";
}
    
function raz() //====pour remettre à zéro
{ 
    if (hapticEnabled) playHapticFeedback();
    document.parametre.zero.disabled = "disabled";
    document.parametre.intermediaire.disabled = "disabled";
    document.getElementById('interm2').innerHTML=""
    //document.parametre.rappel.disabled = "disabled";
    centi = 0;
    mili = 0;
    sec = 0;
    compteur = "aucun temps intermediaire enregistré";
    afficher = sec + "0:" + centi + mili;	
    document.getElementById("time").innerHTML = afficher;
    document.getElementById('presenter').style.visibility='hidden';
    document.getElementsByName('intermediaire')[0].style.backgroundColor = 'rgba(46, 89, 188, 0.25)';
}
    
function inter() //==== Pour afficher le temps intermédiaire
{
    if (hapticEnabled) playHapticFeedback();
    compteur = document.getElementById("time").innerHTML;
    document.getElementsByName('intermediaire')[0].style.backgroundColor = "orange";
    document.getElementById('presenter').style.visibility='visible';
    //document.getElementById('interm').innerHTML = compteur;
    var listViewItem=document.createElement('li');
    listViewItem.appendChild(document.createTextNode(compteur));
    document.getElementById('interm2').appendChild(listViewItem);
    document.getElementsByName('intermediaire')[0].style.backgroundColor = 'rgba(46, 89, 188, 0.25)';
}

 /*function rappeler() {
    document.getElementById('presenter').style.visibility='visible';
    document.getElementById('interm').innerHTML = compteur;
    document.getElementsByName('intermediaire')[0].style.backgroundColor = 'rgba(46, 89, 188, 0.25)';
}*/

// Toggle haptic feedback
function toggleHaptic() {
    hapticEnabled = !hapticEnabled;
    const haptic = hapticEnabled ? 'on' : 'off';
    hapticButton.textContent = `Haptic feedback: ${haptic}`;
}

// Play haptic feedback
function playHapticFeedback() {
    navigator.vibrate(100);
}