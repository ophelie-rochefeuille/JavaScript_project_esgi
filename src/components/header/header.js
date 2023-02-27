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
    let cejour = new Date();
    let options = {weekday: "long", year: "numeric", month: "long", day: "2-digit"};
	let date = cejour.toLocaleDateString("fr-FR", options);
	let heure = ("0" + cejour.getHours()).slice(-2) + ":" + ("0" + cejour.getMinutes()).slice(-2) + ":" + ("0" + cejour.getSeconds()).slice(-2);
	let dateheure = date + " " + heure;
    dateheure = dateheure.replace(/(^\w{1})|(\s+\w{1})/g, lettre => lettre.toUpperCase());
    document.getElementById('dateheure').innerHTML = dateheure;
  }
}

afficherDate();

// vibration

let vibrational = false;
const vibration = document.querySelector('.vibration');

vibration.addEventListener('click', vibrateOn);
vibration.src = '../../assets/images/svg/Mute.svg';
function vibrateOn() {
    console.log(vibrational)
    vibrational = !vibrational
    if (vibrational === true){
        navigator.vibrate(1)
        vibration.src = '../../assets/images/svg/Vibration.svg';
    } else {
        vibration.src = '../../assets/images/svg/Mute.svg';

    }
}

// functions battery

const svgBattery = document.querySelector('.battery-svg');


navigator.getBattery().then(function(battery) {
    // retrieve battery's level and display this level in menu bar
    let one = document.querySelector('.progress-bar')
    document.getElementById('level').innerHTML =  ` ${(battery.level * 100).toFixed()} %`;
    svgBattery.src = calculBatterySvg();

    function calculBatterySvg() {
        if(battery.level > 0.98) {
            console.log(battery.level)
            return "../../assets/images/battery/full-battery.svg"
        } else if (battery.level >= 0.50 ) {
            console.log(battery.level)
            return "../../assets/images/battery/medium-battery.svg"
        } else if ( battery.level >= 0.20) {
            console.log(battery.level)
            return "../../assets/images/battery/low-battery.svg"
        } else if (battery.level < 0.20){
            console.log(battery.level)
            return "../../assets/images/battery/empty-battery.svg"
        }
    }

    // function for autocharge the battery's level in template
    battery.onlevelchange = function() {
        document.getElementById('level').innerHTML = ` ${(battery.level * 100).toFixed()} %`;
        document.querySelector('.progress-bar').style.width = battery.level * 100 + '%';
        svgBattery.src = calculBatterySvg();
    };
});


var hosts = ['192.168.1.1', 'google.com', 'yahoo.com'];
hosts.forEach(function(host){
    ping.sys.probe(host, function(isAlive){
        var msg = isAlive ? 'host ' + host + ' is alive' : 'host ' + host + ' is dead';
        console.log(msg);
    });
});