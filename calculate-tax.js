// Function will calculate total sales and total tax grouped by company.


var salesTaxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.10
};

var companySalesData = [
  {
    name: "Telus",
    province: "BC",
    sales: [ 100, 200, 400 ]
  },
  {
    name: "Bombardier",
    province: "AB",
    sales: [ 80, 20, 10, 100, 90, 500 ]
  },
  {
    name: "Telus",
    province: "SK",
    sales: [ 500, 100 ]
  }
];


function calculateTax(sales, taxRate) {
  return sales * taxRate;
}


function calculateSales(sales) {
  var total = 0;
  for (var i = 0; i < sales.length; i++) {
    total += sales[i];
   }
  return total
}


var totalSalesBombardier = calculateSales(companySalesData[1].sales);

console.log("Bombardier total sales =", totalSalesBombardier);

var totalTaxesBombardier = calculateTax(totalSalesBombardier, 0.05);

console.log("Bombardier total taxes =", totalTaxesBombardier);


//function calculateSalesTax(salesData, taxRates) {
  // Implement your code here
//}

//var results = calculateSalesTax(companySalesData, salesTaxRates);

/* Expected Results:
{
  Telus: {
    totalSales: 1300
    totalTaxes: 144
  },
  Bombardier: {
    totalSales: 800,
    totalTaxes: 40
  }
}
*/