//Gettinga an input value from user in kilometer and converting it to the merter unit

const kilometerToMeter = (kilo)=>{
    var meter = kilo * 1000;
    return meter;
}
kilometerToMeter(10);


//find out the total cost of purchaseing watch, mobile and laptop

const budgetCalculator = (w,m,l) => {
    //  unit price  for every item
    const watch = 50;
    const mobile = 100;
    const laptop = 300;
    const total = w * watch + m * mobile + l * laptop;
    return total;
}
budgetCalculator(3, 5, 2);
// findout the total rent of hotel room with necessary  condition

const hotelCost = (day) => {
    let total = 0;
    if (day <= 10) {
        total = day * 100;
        return total;
    }
    else if (day > 10 && day <= 13) {
        total = 10 * 100 + (day - 10) * 80;
        return total;
    }
    else if (day > 13) {
        total = 1240 + (day - 10) * 50;
        return total;
    }
}
hotelCost(15);

// passing some random names as arguments and return the largest name of those names

const megaFriend = (name1, name2, name3) => {
    const allNames = [name1, name2, name3];
    let max = allNames[0];
    let maxValue = allNames[0].length;
    for (let i = 1; i < allNames.length; i++) {
        if (allNames[i].length > maxValue) {
            maxValue = allNames[i];
        }
    }
    return maxValue; 
}
megaFriend('taijul', 'munim', 'islam');