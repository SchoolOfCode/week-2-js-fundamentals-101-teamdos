//Write a JavaScript function convertGBPtoEUR
// that takes in a specified amount in £,
// and converts it to € using a given exchange rate. 
// The function should return the converted amount.

function convertGBPtoEUR(pounds) {
    return pounds * 1.2;
}

console.log(convertGBPtoEUR(10))

//Write another function convertGBPtoUSD 
//that takes in a specified amount in £, 
//and converts it to $ using a given exchange rate.
// It should behave in a very similar way to the previous function.
function convertGBPtoUSD(pounds) {
    return pounds * 1.26;
}

console.log(convertGBPtoUSD(10))


//Write a function convertGBPToCurrency
// which takes in both a currency code ("EUR" or "USD") 
//and an amount of £ to convert. It should, based on which code has been entered,
// use one of your previously written functions to return the correct conversion. 
//If an unknown code is entered, it should return null.


function convertGBPToCurrency(pounds, currencyCode) {
    if (currencyCode === "USD") {
      return convertGBPtoUSD(pounds);
    } else if (currencyCode === "EUR") {
      return convertGBPtoEUR(pounds);
    } else {
      return null;
    }
   }
    console.log(convertGBPToCurrency(50, "USD"))