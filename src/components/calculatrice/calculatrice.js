function clearScreen() {
    document.getElementById("result").value = "";
    }
    
    function display(value) {
    document.getElementById("result").value += value;
    }
    
    
    function calculate() {
    var p = document.getElementById("result").value;
    var q = eval(p);
    saveCalcul(p,q);
    document.getElementById("result").value = q;
    }

    //resultat intermediaire
    function saveCalcul(operation, resultat) {
    document.getElementById("historique").value += " " + operation + " = " + resultat;

    }
    function clearHistorique(){
        document.getElementById("historique").value = ""
    }
    //supprimer resultat intermediaire
    //positif/negatif
    // retour haptique
