
const options = {

    uttarPradesh : ["Prayagraj", "Kanpur", "Lucknow", "Pratapgarh", "Ghaziabad", "Jhansi", "Aydhya", "Basti", "Agra","Kaushambi"],
    madhyaPradesh : ["Bhopal", "Jabalpur", "Gwalior", "Rewa", "Ujjain", "Vidisha", "Indore", "Katni", "Dewas"],
    rajasthan : ["Ajmer", "Jaipur", "Jaisalmer", "Jodhpur", "Kota", "Udaipur","Bhilwara", "Jhalawar", "kekri", "Phalodi", "Shahpura", "Sikar", "Tonk", "Alwar"]
};


function updateDistrict(){

    const stateSelect = document.getElementById('state');
    const districtSelect = document.getElementById('district');

    const selectedOption = stateSelect.value;

    const resultText = document.getElementById('resultText');

    districtSelect.innerHTML = '<option value="">Select District</option>';
    if(selectedOption){
        options[selectedOption].forEach(function(district){
            const option = document.createElement('option');
            option.value = district.toLowerCase();
            option.textContent = district;
            districtSelect.appendChild(option);
        })
    }
    resultText.textContent = `State : ${stateSelect.options[stateSelect.selectedIndex].text}, District : None`;

}

function showSelected(){

    const stateSelect = document.getElementById('state');
    const districtSelect = document.getElementById('district');
    const resultText = document.getElementById('resultText');

    resultText.textContent = `State : ${stateSelect.options[stateSelect.selectedIndex].text}, District : ${districtSelect.options[districtSelect.selectedIndex].text};`
}

let captchaText = "";
function generateCaptcha(){
    captchaText = "";
    const chars = "ABDCEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for(let i = 0; i < 6; i++){
        captchaText += chars.charAt(Math.floor(Math.random()*chars.length));
    }
    document.getElementById('captcha').textContent = captchaText;
}

document.getElementById('captchaForm').addEventListener('submit', function(e){

    e.preventDefault();

    const userInput = document.getElementById('inputCaptcha').value;
    const captchaResult = document.getElementById('captchaResult');

    if(userInput === captchaText){
        captchaResult.textContent = "Captcha verifed Successfull!!";
        captchaResult.style.color = "green";
    }
    else{
        captchaResult.textContent = "Captch Incorrect!!";
        captchaResult.style.color = "red";
        generateCaptcha();
    }
    document.getElementById('inputCaptcha').value='';
})

window.onload = generateCaptcha;