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


function calculateSales(sales) {
  var total = 0;
  for (var i = 0; i < sales.length; i++) {
    total += sales[i];
   }
  return total
}


function calculateTax(sales, taxRate) {
  return sales * taxRate;
}


function calculateSalesTax(salesData, taxRates) {
  var companyData = {};

  for (var i = 0; i < salesData.length; i++) {

    var key = salesData[i].name
    var totalSales = calculateSales(salesData[i].sales);
    var totalTaxes = calculateTax(totalSales, salesTaxRates[salesData[i].province]);

    if (key in companyData) {
      companyData[key].totalSales += totalSales;
      companyData[key].totalTaxes += totalTaxes;
    } else {
      companyData[key] = {}
      companyData[key].totalSales = totalSales;
      companyData[key].totalTaxes = totalTaxes;
    }

  }
  return companyData;

}

var results = calculateSalesTax(companySalesData, salesTaxRates);
console.log(results);

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