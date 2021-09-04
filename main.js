
const akansForm = document.getElementById('akansForm');
const daysOfTheWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const calcBtn = document.getElementById('calculateButton');
const result = document.getElementById('result');

function calculateDayOfBirth(birthDate, gender){

    const dateOfBirth = new Date(birthDate);
    const dayOfTheWeek = dateOfBirth.getDay();

    const dayOfBirth = daysOfTheWeek[dayOfTheWeek];

    return akanNames.find(function(akan){
        return akan.dayOfBirth == dayOfBirth && akan.gender.toLowerCase() == gender.toLowerCase();
    });

}

calcBtn.addEventListener('click', function(){
    const akan = calculateDayOfBirth(akansForm.date.value, akansForm.gender.value );
    result.innerHTML = akan.name;
    // alert(akan.name);
})




