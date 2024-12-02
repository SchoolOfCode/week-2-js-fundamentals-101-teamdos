// BookNook, a community bookstore, is exploring ways to increase sales and customer loyalty. 
//They surveyed their customers to find out what would make them more likely to purchase books:

// 70% indicated that discounts would encourage them to buy more.
// 20% were interested in a loyalty program that rewards regular customers.
// 10% suggested more author events and book signings.
// BookNook has a low-margin model, meaning it doesn’t make much per book. The only discounts it authorises staff to give are 10%, but only when a customer is spending over £20 or more.

//Develop a PLAN
// MVP 1: Automate calculation of 10% over £20

// Function
    // - Obtain the basket value OK
let basketValue = 20;
console.log("Total Value before Discount is £" + basketValue);
    // - Ignore currency units for now. Assume ignore VAT.

    // - Declare a new Function, basketDiscount OK
// function basketDiscount(basketValue){
//     if (basketValue >= 20) {
//         discountedValue = basketValue * 0.9
//         return discountedValue
//     } else {
//         return basketValue
//     }
// }
    // - Input the basket value  OK
    // - Test if over £20 OK
    // - Output the reduced price OK
    // - or otherwise, return the original value OK
    // - Test functionality of conversion OK
// console.log("Discounted Value is £" + basketDiscount(basketValue))

// Additional Steps:
// - Add in a string to declare if discount has been added or not
// - Caluclate the remaining spend to achieve a discount

function basketDiscount(basketValue){
        if (basketValue >= 20) {
            discountedValue = basketValue * 0.9;
            return "Discount Applied! New total is £" + discountedValue;
        } else {
            let discountThreshold = 20 - basketValue;
            return "Spend another £" + discountThreshold + " to receive a 10% discount. Current value £" + basketValue;
        }
    }

console.log(basketDiscount(basketValue))
// - Format the output to the correct currency format £00.00 


// MVP2
// Create a function calculateLoyaltyPoints that awards points based on the purchase amount, 
// where every dollar spent earns 1 point if no discount is applied. 
// This function aims to build a foundation for a future loyalty program.

//Declare a new function basketLoyalty

function basketLoyalty(basketValue) {
    if (basketValue < 20) {
        loyaltyPoints = basketValue;
        return "Congratulations, you have earned " + loyaltyPoints + " loyalty points.";
    } else {
        return "sorry, not valid for loyalty points";
    }
}

console.log(basketLoyalty(basketValue))


// assume this can be separate to previous
// Input will be basketValue
// Create a new variable, loyaltyPoints, to store the output
// if order value is less than 20, calculate the points (1 = 1 point)
// else return
// Output will be an integer number of points to

// MVP 3
// Rewrite the function from MVP 1 to include only apply the discount after subtracting 20 from the total
// then, add the 20 back on

function basketLessDiscount(basketValue){
    if (basketValue >= 20) {
        discountedValue = 20 + 0.9*(basketValue - 20);
        return "Discount Applied! New total is £" + discountedValue + ". You have saved £" + (basketValue - discountedValue);
    } else {
        let discountThreshold = 20 - basketValue;
        return "Spend another £" + discountThreshold + " to receive a 10% discount. Current value £" + basketValue;
    }
}

console.log(basketLessDiscount(basketValue))

//I have edited the threshold to 20.10 pence as the minimum discount achievable should be 0.01
// "Discount Applied! New total is £20. You have saved £0" makes no sense to receive. But the function, functions.