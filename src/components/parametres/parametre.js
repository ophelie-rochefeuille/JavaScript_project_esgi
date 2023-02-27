// import {switchDarkMode,hello} from("../darkMode/darkMode.js");

// switchDarkMode();

// Enregistre un objet dans le stockage local
let parametrage = { 
    latence_Reseau: {
        affichage_latence : true,
        domainePing : "http://127.0.0.1:8080/",
        delaisRafraichissement : "60"
    },
    formatHoraire: {
        affichage_heure : true,
        affichage_minute : true,
        affichage_seconde : true
    },
    formatDate: {
        affichage_date : true,
        affichage_annee : true,
        affichage_mois : true,
        affichage_jour : true
    },
    vibration: {
        retour_haptique : true,
        etat_vibration : "silencieux"
    },
    etatBatterie : true,
    theme: "light",
    verrouillage: "veille"
};
localStorage.setItem('parametrages', JSON.stringify(parametrage));

// Récupère l'objet du stockage local
let parametragetest = getLocalStorage();
for(let i =0; i < parametragetest.length(); i++){
  console.log(parametragetest[i]);
}
// Modifie un champ de l'objet
parametragetest.verrouillage = "eteint";

// Enregistre l'objet modifié dans le stockage local
localStorage.setItem('parametrages', JSON.stringify(parametragetest));

// Récupère l'objet modifié du stockage local
// parametrageJSON = localStorage.getItem('parametrages');
// parametrageObjet = JSON.parse(parametrageJSON);





//                                                      Latence Réseau


//                                                      Latence Réseau (FIN)



let test = JSON.parse(localStorage.getItem("parametrages"));
console.log(test);
let test2 = JSON.parse(test)
console.log(test2.theme);

//                                                      Switch Thème
// Récupère le choix de thème enregistré
let theme = test.theme;//localStorage.getItem('theme');
// Applique le thème
let themeSelector = document.getElementById('theme-selector');
if (theme) {
  themeSelector.value = theme;
  applyTheme(theme);
} else {
  parametrageJson.theme = "light"
localStorage.setItem('parametrages', JSON.stringify(parametrageJSON));
  localStorage.setItem('theme', 'light'); // Applique le thème par défaut si aucun choix n'a été enregistré
  applyTheme('light');
}
// Enregistre le choix de thème lorsqu'il est modifié
themeSelector.addEventListener('change', function() {
  let selectedTheme = themeSelector.value;
  localStorage.setItem('theme', selectedTheme);
  applyTheme(selectedTheme);
});
// Applique le thème sélectionné
function applyTheme(theme) {
  if (theme === 'dark') {
    document.body.style.backgroundColor = '#1E1E1E';
    document.body.style.color = '#FFFFFF';
  } else if (theme === 'light'){
    document.body.style.backgroundColor = '#FFFFFF';
    document.body.style.color = '#000000';
  } else {
    document.body.style.backgroundColor = '#008000';
    document.body.style.color = '#000000';
  }
}
//                                                      Switch Thème (FIN)


function setLocalStorage(){
  let getParametrage = localStorage.getItem('parametrages');
  let parametrageObject = JSON.parse(parametrageJSON);
}

function getLocalStorage(){
  // Récupère l'objet du stockage local
let parametrageJSON = localStorage.getItem('parametrages');
let parametrageObjet = JSON.parse(parametrageJSON);
console.log(parametrageObjet.verrouillage); // Affiche {nom: "Dupont", prenom: "Jean", age: 30}
return parametrageObjet;
}