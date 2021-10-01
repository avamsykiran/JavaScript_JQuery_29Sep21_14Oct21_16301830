
const getGreeting = () => {
    let greeting="";

    let h = (new Date()).getHours();

    if(h>=3 && h<12) greeting="Good Morning";
    else if(h>=12 && h<=16) greeting="Good Noon";
    else greeting="Good Evening";

    return greeting;
}

export const greet = userName => `${getGreeting()} ${userName}`;