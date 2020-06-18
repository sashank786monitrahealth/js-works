
var v_Patient_id ;//=133;
var v_Patient_vitals_client_time_posix_sec = Math.round(Date.now() / 1000)//=1592274601; // 114
var v_Patient_heart_rate_bpm_ocr //=103;
var v_Patient_heart_rate_bpm //=103;
var v_Patient_heart_rate_edit_flag=false;
var v_Patient_resp_rate_bpm_ocr // =16;
var v_Patient_resp_rate_bpm // =16;
var v_Patient_resp_rate_edit_flag  =false;
var v_Patient_temperature_unit_ocr="F";
var v_Patient_temperature_c_ocr // =36.1;
var v_Patient_temperature_f_ocr // =97.1;
var v_Patient_temperature_c // =36.1;
var v_Patient_temperature_f // =97.1;
var v_Patient_temperature_edit_flag=false;
var v_Patient_oxygen_sat_pct_ocr // =100;
var v_Patient_oxygen_sat_pct // =100;
var v_Patient_oxygen_sat_edit_flag  =false;
var v_Patient_longitude_X  =78.433529;
var v_Patient_latitude_Y  =17.448489;
var v_Patient_temperature_collect_time_sec = 120 // =128;
var v_Patient_vitals_collect_time_sec = 300 // =300;
var vImagePulseOxymeter   = "N/A";
var vImageThermometer   = "N/A";

var myPOSTobj;


console.log(v_Patient_vitals_client_time_posix_sec);
document.querySelector("#Client_Time_POSIX_Val").innerText = v_Patient_vitals_client_time_posix_sec+"";
document.querySelector("#Client_Time_Date_Val").innerText = moment.utc(v_Patient_vitals_client_time_posix_sec*1000).local();

function temperatureFarenheitVar(){
    
    
    v_Patient_temperature_f_ocr = document.getElementById("temperatureFarenheit").value;
    v_Patient_temperature_f = v_Patient_temperature_f_ocr;
    v_Patient_temperature_c_ocr = ((v_Patient_temperature_f_ocr - 32) * 5/9).toFixed(1);
    v_Patient_temperature_c = v_Patient_temperature_c_ocr;
    document.querySelector("#temperatureCelcius_Val").innerText = v_Patient_temperature_c+"°C";
    document.querySelector("#temperatureFarenheit_Val").innerText = v_Patient_temperature_f_ocr+"°F /";
    console.log("v_Patient_temperature_f_ocr = "+v_Patient_temperature_f_ocr);
    console.log("v_Patient_temperature_f = "+v_Patient_temperature_f);

}

function spO2Var(){
    
    v_Patient_oxygen_sat_pct_ocr = document.getElementById("SPO2PCT").value;
    v_Patient_oxygen_sat_pct = v_Patient_oxygen_sat_pct_ocr;
    document.querySelector("#SPO2PCT_Val").innerText = v_Patient_oxygen_sat_pct_ocr;
    console.log("v_Patient_oxygen_sat_pct_ocr = "+v_Patient_oxygen_sat_pct_ocr);
    console.log("v_Patient_oxygen_sat_pct = "+v_Patient_oxygen_sat_pct);
    
}


function respirationVar(){
    v_Patient_resp_rate_bpm_ocr = document.getElementById("Respirationate_bpm").value;
    v_Patient_resp_rate_bpm = v_Patient_resp_rate_bpm_ocr;
    document.querySelector("#Respirationate_bpm_Val").innerText = v_Patient_resp_rate_bpm_ocr;
    console.log("v_Patient_resp_rate_bpm_ocr = "+v_Patient_resp_rate_bpm_ocr);
    console.log("v_Patient_resp_rate_bpm = "+v_Patient_resp_rate_bpm);
    
}

function heartRateVar(){
    v_Patient_heart_rate_bpm_ocr = document.getElementById("HeartRate_bpm").value;
    v_Patient_heart_rate_bpm = v_Patient_heart_rate_bpm_ocr;
    document.querySelector("#HeartRate_bpm_Val").innerText = v_Patient_heart_rate_bpm_ocr;
    console.log("v_Patient_heart_rate_bpm_ocr = "+v_Patient_heart_rate_bpm_ocr);
    console.log("v_Patient_heart_rate_bpm = "+v_Patient_heart_rate_bpm);
}

function patientVar(){

    v_Patient_id = document.getElementById("Patient_ID").value;
    document.querySelector("#Patient_ID_Val").innerText = v_Patient_id;
    console.log("v_Patient_id = "+v_Patient_id);
}





function previewTemperatureFile() {
    const preview = document.querySelector('#TemperatureImg');
    const file = document.querySelector('#TemperatureImgInput').files[0];
    const reader = new FileReader();
  
    reader.addEventListener("load", function () {
      // convert image file to base64 string
      preview.src = reader.result;
      vImageThermometer = preview.src;
      console.log(vImageThermometer);
    }, false);
  
    if (file) {
      reader.readAsDataURL(file);
    }
  }


  function previewSpO2File() {
    const preview = document.querySelector('#SpO2Img');
    const file = document.querySelector('#SpO2ImgInput').files[0];
    const reader = new FileReader();
  
    reader.addEventListener("load", function () {
      // convert image file to base64 string
      preview.src = reader.result;
      vImagePulseOxymeter = preview.src;
      console.log(vImagePulseOxymeter);
    }, false);
  
    if (file) {
      reader.readAsDataURL(file);
    }
  }


/*##############################################################################
#####
##############################################################################*/



    function generatePOST(){

        myPOSTobj = {
            "Patient_id" : v_Patient_id,
            "Patient_vitals_client_time_posix_sec" : v_Patient_vitals_client_time_posix_sec,
            "Patient_heart_rate_bpm_ocr" : v_Patient_heart_rate_bpm_ocr,
            "Patient_heart_rate_bpm" : v_Patient_heart_rate_bpm,
            "Patient_heart_rate_edit_flag" : v_Patient_heart_rate_edit_flag,
            "Patient_resp_rate_bpm_ocr" : v_Patient_resp_rate_bpm_ocr,
            "Patient_resp_rate_bpm" : v_Patient_resp_rate_bpm,
            "Patient_resp_rate_edit_flag" : v_Patient_resp_rate_edit_flag,
            "Patient_temperature_unit_ocr" : v_Patient_temperature_unit_ocr,
            "Patient_temperature_c_ocr" : v_Patient_temperature_c_ocr,
            "Patient_temperature_f_ocr" : v_Patient_temperature_f_ocr,
            "Patient_temperature_c" : v_Patient_temperature_c,
            "Patient_temperature_f" : v_Patient_temperature_f,
            "Patient_temperature_edit_flag" : v_Patient_temperature_edit_flag,
            "Patient_oxygen_sat_pct_ocr" : v_Patient_oxygen_sat_pct_ocr,
            "Patient_oxygen_sat_pct" : v_Patient_oxygen_sat_pct,
            "Patient_oxygen_sat_edit_flag" : v_Patient_oxygen_sat_edit_flag,
            "Patient_longitude_X" : v_Patient_longitude_X,
            "Patient_latitude_Y" : v_Patient_latitude_Y,
            "Patient_temperature_collect_time_sec" : v_Patient_temperature_collect_time_sec,
            "Patient_vitals_collect_time_sec" : v_Patient_vitals_collect_time_sec,
            "ImagePulseOxymeter":vImagePulseOxymeter,
            "ImageThermometer":vImageThermometer
            };



            var myPOSTobjstr = JSON.stringify(myPOSTobj, null, 2);
            

    document.querySelector("#checkPOST_LBL").innerText = myPOSTobjstr;

    }


    function getClient_Time_POSIX_Val(){

        if (document.getElementById("Client_Time_POSIX_Val_lbl").value.trim() != ""){
        v_Patient_vitals_client_time_posix_sec = document.getElementById("Client_Time_POSIX_Val_lbl").value


console.log(v_Patient_vitals_client_time_posix_sec);
document.querySelector("#Client_Time_POSIX_Val").innerText = v_Patient_vitals_client_time_posix_sec+"";
document.querySelector("#Client_Time_Date_Val").innerText = moment.utc(v_Patient_vitals_client_time_posix_sec*1000).local();
} else {

    v_Patient_vitals_client_time_posix_sec = Math.round(Date.now() / 1000);
    

document.querySelector("#Client_Time_POSIX_Val").innerText = v_Patient_vitals_client_time_posix_sec+"";
document.querySelector("#Client_Time_Date_Val").innerText = moment.utc(v_Patient_vitals_client_time_posix_sec*1000).local();
console.log("posix time empty hence - client time = "+v_Patient_vitals_client_time_posix_sec);
}

    }


    function submitPOST(){
        console.log(myPOSTobj);
        document.querySelector("#success_LBL").innerText = "SUCCESS";
        document.querySelector("#error_LBL").innerText = "ERROR";
    }
