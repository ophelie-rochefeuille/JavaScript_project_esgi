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
//                                                      Switch Save All 
let saveAllSelector = document.getElementById('btnSaveAll');
saveAllSelector.addEventListener('click', function() {
  console.log("save");
  latenceReseauValid();
  formatHoraire();
  formatDate();
  etatBatterie();
  verrouillage();
})
//Latence reseau
function latenceReseauValid(){
  if(delais_latence() != null && domaine_latence()){
    let latenceParameter = getLocalStorage();
    latenceParameter.latence_Reseau.affichage_latence = latence_reseau();
    latenceParameter.latence_Reseau.delaisRafraichissement = delais_latence();
    latenceParameter.latence_Reseau.domainePing = domaine_latence()
    localStorage.setItem('parametrages', JSON.stringify(latenceParameter)); 
  }
}
//Horaire
function formatHoraire(){
    let horaireParameter = getLocalStorage();
    horaireParameter.formatHoraire.affichage_heure = horaire_heure();
    horaireParameter.formatHoraire.affichage_minute = horaire_minute();
    horaireParameter.formatHoraire.affichage_seconde = horaire_seconde();
    localStorage.setItem('parametrages', JSON.stringify(horaireParameter)); 

}
// Date 
function formatDate(){
  let dateParameter = getLocalStorage();
  dateParameter.formatDate.affichage_date = date_affichage();
  dateParameter.formatDate.affichage_annee = date_annee();
  dateParameter.formatDate.affichage_mois = date_mois();
  dateParameter.formatDate.affichage_jour = date_jour();
  localStorage.setItem('parametrages', JSON.stringify(dateParameter)); 
}
// Batterie
function etatBatterie(){
  let parameter = getLocalStorage();
  let batterieelector = document.getElementById('batterie');
  parameter.etatBatterie = batterieelector.checked;
  localStorage.setItem('parametrages', JSON.stringify(parameter)); 
}

//                                                      Switch Batterie (FIN)

//                                                      Switch reset
let resetSelector = document.getElementById('reset');
resetSelector.addEventListener('click', function() {
  resetPSLocalStorage();
})
//                                                      Switch reset (FIN)
// Latence Reseau
function latence_reseau() {
let latenceSelector = document.getElementById('affichageLatence');
  return latenceSelector.checked;
}
function delais_latence(){
  let delaisLatenceSelector = document.getElementById('delaisLatence');
  return delaisLatenceSelector.value;
}
function domaine_latence(){
  let domainePingSelector = document.getElementById('domainePing');
  return domainePingSelector.value;
}
// Horaire
function horaire_heure(){
  let horaireHSelector = document.getElementById('heure');
  return horaireHSelector.checked;
}
function horaire_minute(){
  let horaireMSelector = document.getElementById('minutes');
  return horaireMSelector.checked;
}
function horaire_seconde(){
  let horaireSSelector = document.getElementById('secondes');
  return horaireSSelector.checked;
}
//Date
function date_affichage() {
  let dateDSelector = document.getElementById('date');
  return dateDSelector.checked;
}
function date_annee() {
  let dateASelector = document.getElementById('annee');
  return dateASelector.checked;
}
function date_mois() {
  let dateMSelector = document.getElementById('mois');
  return dateMSelector.checked;
}
function date_jour() {
  let dateJSelector = document.getElementById('jour');
  return dateJSelector.checked;
}
// Verrouillage
function verrouillage(){
  let parameter = getLocalStorage();
  let verrouillageSelector = document.getElementById('verrouillage');
  parameter.verrouillage = verrouillageSelector.value;
  localStorage.setItem('parametrages', JSON.stringify(parameter)); 
}


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



//                                                      Enregistrement Parametre
let saveJsonSelector = document.getElementById('btnJson');
saveJsonSelector.addEventListener('click', function() {
  savejson();
})

let addJsonSelector = document.getElementById('addBtnJson');
addJsonSelector.addEventListener('change', handleFiles, false);
  function handleFiles(){
    if(!!this.files[0]) {
    let typeContent = this.files[0].name;
    if(typeContent.endsWith(".json")) {
      const reader = new FileReader();
      reader.addEventListener("load", () => {
        saveParams(reader.result);
      });
      reader.readAsText(this.files[0]);
    }
  }
  }
//                                                      Enregistrement Parametre (FIN)

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

function savejson(){
  var uri = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(getLocalStorage()));
  var downloadLink = document.getElementById("btnJson");
  downloadLink.setAttribute("href", uri);
  downloadLink.setAttribute("download", "jsParameter.json");
}

function saveParams(params){
  localStorage.setItem('parametrages', params);
}