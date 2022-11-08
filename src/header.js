console.log('header');

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

/*var battery = navigator.battery || navigator.mozBattery || navigator.webkitBattery;

console.log(battery);

function updateBatteryStatus() {
    battery = battery.level * 100 + " %";
    battery.addEventListener("levelchange", updateBatteryStatus);   
}

updateBatteryStatus();

navigator.getBattery().then(function(battery) {
    function updateAllBatteryInfo(){
      updateChargeInfo();
      updateLevelInfo();
      updateChargingInfo();
      updateDischargingInfo();
    }
    updateAllBatteryInfo();
  
    battery.addEventListener('chargingchange', function(){
      updateChargeInfo();
    });
    function updateChargeInfo(){
      console.log("Battery charging? "
                  + (battery.charging ? "Yes" : "No"));
    }
  
    battery.addEventListener('levelchange', function(){
      updateLevelInfo();
    });
    function updateLevelInfo(){
      batterie = battery.level * 100 
      console.log(battery.level * 100 + "%");
      document.getElementById('battery').innerHTML = parseInt(batterie, 10) + "%";
    }
  
    battery.addEventListener('chargingtimechange', function(){
      updateChargingInfo();
    });
    function updateChargingInfo(){
      console.log("Battery charging time: "
                   + battery.chargingTime + " seconds");
    }
  
    battery.addEventListener('dischargingtimechange', function(){
      updateDischargingInfo();
    });
    function updateDischargingInfo(){
      console.log("Battery discharging time: "
                   + battery.dischargingTime + " seconds");
    }
  
  }); */
navigator.getBattery().then(function(battery) {
    let one = document.querySelector('.progress-bar')
    one.style.width = battery.level * 100 + '%';
    //$('.progress-bar').css('width', battery.level * 100 + '%');
    document.getElementById('level').innerHTML =  `Battery level: ${(battery.level * 100).toFixed()} %`;
    //$('#level').html('Battery level: ' + (battery.level * 100).toFixed() + '%')

    battery.onlevelchange = function() {
        document.getElementById('level').innerHTML = `Battery level: ${(battery.level * 100).toFixed()} %`;
        //$('#level').html('Battery level: ' + (this.level * 100).toFixed() + '%')
        document.querySelector('.progress-bar').style.width = battery.level * 100 + '%';
    };
});

/*let batteryCharge  = document.getElementById('battery');
batteryCharge.value = `${navigator.getBattery()
    .then(function(battery) {
        battery.level * 100;
    })} %`;
navigator.getBattery()
    .then(function(battery) {
        console.log(battery.level * 100);
    });


let battery;
navigator.getBattery().then((battery) => {
    function updateAllBatteryInfo() {
        updateChargeInfo();
        updateLevelInfo();
        updateChargingInfo();
        updateDischargingInfo();
    }
    updateAllBatteryInfo();

    battery.addEventListener("chargingchange", () => {
        updateChargeInfo();
    });
    function updateChargeInfo() {
        console.log(`Battery charging? ${battery.charging ? "Yes" : "No"}`);
    }

    battery.addEventListener("levelchange", () => {
        updateLevelInfo();
    });
    function updateLevelInfo() {
         let batteryCharge = document.getElementById('battery');
         let tab = [];

         let pourcent = battery.level * 100;
         if(batteryCharge != ''){
             batteryCharge.removeAttribute();
             batteryCharge.append(pourcent);
         }
        console.log(`Battery level: ${battery.level * 100}%`);
    }

    battery.addEventListener("chargingtimechange", () => {
        updateChargingInfo();
    });
    function updateChargingInfo() {
        console.log(`Battery charging time: ${battery.chargingTime} seconds`);
    }

    battery.addEventListener("dischargingtimechange", () => {
        updateDischargingInfo();
    });
    function updateDischargingInfo() {
        console.log(`Battery discharging time: ${battery.dischargingTime} seconds`);
    }
});*/