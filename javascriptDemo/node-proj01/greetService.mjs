
const getGreeting = () => {
    let h = (new Date()).getHours();
    let greeting="";

    if(h>=3 && h<12) greeting="Good Morning ";
    else if(h>=12 && h<=16) greeting="Good Noon";
    else greeting = "Good Evening ";

    return greeting;
};

export const greet = userName => `${getGreeting()} ${userName}!`;

