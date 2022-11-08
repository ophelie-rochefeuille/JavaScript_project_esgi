console.log('header');

function pause(ms) 
{
  return new Promise(resolve => setTimeout(resolve, ms));
}

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

function updateBatteryStatus() {
    battery = battery.level * 100 + " %";
    battery.addEventListener("levelchange", updateBatteryStatus);   
}

updateBatteryStatus();*/

/*navigator.getBattery().then(function(battery) {
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
  
  });*/

