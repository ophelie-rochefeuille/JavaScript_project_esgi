// import {switchDarkMode,hello} from("../darkMode/darkMode.js");
let parametrage = {};
init();
// switchDarkMode();
// Enregistre un objet dans le stockage local
function init() {
    if(isLocalStorage() == false) {
        this.parametrage = { 
            latence_Reseau: {
                affichage_latence : true,
                domainePing : "",
                delaisRafraichissement : ""
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
                etat_vibration : ""
            },
            etatBatterie : true,
            theme: "",
            verrouillage: ""
        };
        localStorage.setItem('parametrages', JSON.stringify(this.parametrage));
    } else {
        this.parametrage = getLocalStorage();
    }
}
// Récupère l'objet du stockage local
// let parametragetest = getLocalStorage();
// Enregistre l'objet modifié dans le stockage local
// localStorage.setItem('parametrages', JSON.stringify(setLocalStorage(parametragetest, "eteint")));// JSON.stringify(parametragetest));


console.log("JSON PARTY : ", JSON.stringify(this.parametrage));
//                                                      Latence Réseau


//                                                      Latence Réseau (FIN)



//                                                      Switch Thème
// Récupère le choix de thème enregistré
let parametreTheme = getLocalStorage();
// Applique le thème
let themeSelector = document.getElementById('theme-selector');
if (!!parametreTheme.theme) {
  themeSelector.value = parametreTheme.theme;
  applyTheme(parametreTheme.theme);
} else {
  parametreTheme.theme = "light"
localStorage.setItem('parametrages', JSON.stringify(setLSTheme(this.parametrage, "light"))); // Applique le thème par défaut si aucun choix n'a été enregistré
  applyTheme('light');
}
// Enregistre le choix de thème lorsqu'il est modifié
themeSelector.addEventListener('change', function() {
  let selectedTheme = themeSelector.value;
  let parametrageTheme = getLocalStorage();
  localStorage.setItem('parametrages', JSON.stringify(setLSTheme(parametrageTheme, selectedTheme)));
  applyTheme(selectedTheme);
});
// localStorage.setItem('parametrages', JSON.stringify(setLSTheme(parametragetest, "light")));// JSON.stringify(parametragetest));
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


function setLSVerrouillage(parametre, value){
  parametre.verrouillage = value;
  return parametre;
}

function setLSTheme(parametre, value){
    parametre.theme = value;
    return parametre;
  }

function getLocalStorage(){
  // Récupère l'objet du stockage local
let parametrageJSON = localStorage.getItem('parametrages');
let parametrageObjet = JSON.parse(parametrageJSON);
return parametrageObjet;
}
function isLocalStorage(){
    return !!localStorage.getItem('parametrages');
}

function resetPSLocalStorage() {
    localStorage.removeItem("parametrages")
}