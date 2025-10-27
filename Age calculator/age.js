function calculateAge(){
    // get dob input value
    const dobInput =  document.getElementById("dob").value;

    if(!dobInput){
        alert("Please enter your date of birth");
        return;
    }

    // create date object for bithdate and today

    const birthDate = new Date(dobInput);
    const today = new Date();

    let years = today.getFullYear() - birthDate.getFullYear();
    let months = today.getMonth() - birthDate.getMonth();
    let days = today.getDate() - birthDate.getDate();

    // adjust for moth/day overflows
    if(days<0){
        months--;
        days+= new Date(today.getFullYear(), today.getMonth(), 0).getDate();
    }

    if(months<0){
        years--;
        months+=12;
    }

    // display the result
    document.getElementById("ageResult").textContent = `${years} years, ${months} months, and ${days} days`;
}