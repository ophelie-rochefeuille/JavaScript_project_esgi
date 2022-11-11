function pause(ms)
{
  return new Promise(resolve => setTimeout(resolve, ms));
}

// To check that is vibration API supported

async function afficherDate() 
{
  while(true) 
  {
    await pause(1000);
    var cejour = new Date();
    var options = {weekday: "long", year: "numeric", month: "long", day: "2-digit"};
	var date = cejour.toLocaleDateString("fr-FR", options);
	var heure = ("0" + cejour.getHours()).slice(-2) + ":" + ("0" + cejour.getMinutes()).slice(-2) + ":" + ("0" + cejour.getSeconds()).slice(-2);
	var dateheure = date + " " + heure;
    var dateheure = dateheure.replace(/(^\w{1})|(\s+\w{1})/g, lettre => lettre.toUpperCase());
    document.getElementById('dateheure').innerHTML = dateheure;
  }
}
afficherDate();


// functions battery

const svgBattery = document.querySelector('.battery-svg');



navigator.getBattery().then(function(battery) {
    // retrieve battery's level and display this level in menu bar
    let one = document.querySelector('.progress-bar')
    document.getElementById('level').innerHTML =  ` ${(battery.level * 100).toFixed()} %`;


    function calculBatterySvg() {
        if(battery.level > 0.98) {
            console.log(battery.level)
            return "imagesAndSvg/battery/full-battery.svg"
        } else if (battery.level >= 0.50 ) {
            console.log(battery.level)
            return "imagesAndSvg/battery/medium-battery.svg"
        } else if ( battery.level >= 0.20) {
            console.log(battery.level)
            return "imagesAndSvg/battery/low-battery.svg"
        } else if (battery.level < 0.20){
            console.log(battery.level)
            return "imagesAndSvg/battery/empty-battery.svg"

        }
    }

    // function for autocharge the battery's level in template
    battery.onlevelchange = function() {
        document.getElementById('level').innerHTML = ` ${(battery.level * 100).toFixed()} %`;
        document.querySelector('.progress-bar').style.width = battery.level * 100 + '%';
        svgBattery.src = calculBatterySvg();
    };
});

