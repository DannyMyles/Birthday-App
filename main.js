
/* const dateOfBirthElement = document.getElementById('date');
const genderElement = document.getElementById('gender'); */
const akansForm = document.getElementById('akansForm');
const daysOfTheWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const calcBtn = document.getElementById('calculateButton');
const result = document.getElementById('result');

function calculateDayOfBirth(birthDate, gender){

    const dateOfBirth = new Date(birthDate);
    
    const CC = dateOfBirth.getFullYear().toString().substr(0, 2);
    const YY = dateOfBirth.getFullYear().toString().substr(2, 4);
    const MM = dateOfBirth.getMonth()+1;
    const DD = dateOfBirth.getDate();
    
    const dayOfTheWeek = ( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) % 7;
    

    const dayOfBirth = daysOfTheWeek[Math.floor(dayOfTheWeek)];


    return akanNames.find(function(akan){
        return akan.dayOfBirth == dayOfBirth && akan.gender.toLowerCase() == gender.toLowerCase();
    });

}

calcBtn.addEventListener('click', function(){
    const akan = calculateDayOfBirth(akansForm.date.value, akansForm.gender.value );
    result.innerHTML = akan.name;
    // alert(akan.name);
})




