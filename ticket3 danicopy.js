//Develop a JavaScript function applyDiscount
// that calculates the final price after applying a 10% discount on single purchases over £20.
// This function should help increase the average purchase value by offering an immediate incentive.

function applyDiscount(purchase) {
    if (purchase >= 20) {
        return purchase * 0.9;
    } else {return purchase;

    }
}

console.log(applyDiscount(50))


//Create a function calculateLoyaltyPoints 
//that awards points based on the purchase amount, 
//where every dollar spent earns 1 point if no discount is applied. 
//This function aims to build a foundation for a future loyalty program.

function calculateLoyaltyPoints(purchase) {
    let points = 0; 
    for (let x = 0; x < purchase; x++) { 
      points += 1; 
    }
    return points; 
  }

  console.log(calculateLoyaltyPoints(50))
  