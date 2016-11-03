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

function calculateSalesTax(salesData, taxRates) {
  return salesData * taxRates;
}

var resultingReport = {};

var salesTaxReport = function(salesData, taxRates){

  salesData.forEach(function(element, i, arr){
    // var companyData = {
    //   totalSales: 0,
    //   totalTaxes: 0
    // };

    var salesSum = 0;

    if(!resultingReport.hasOwnProperty(element.name) ){

      element.sales.forEach(function(elm, i){
        salesSum += elm;
      });

      resultingReport[element.name] = {
        totalSales: salesSum,
        totalTaxes: calculateSalesTax(salesSum, salesTaxRates[element.province])
      }
      // companyData;
      // companyData["totalSales"] = salesSum; //~~~~~~~~
      // companyData["totalTaxes"] = calculateSalesTax(salesSum, salesTaxRates[element.province]);

    } else {

      element.sales.forEach(function(elm, i){
        salesSum += elm;
      });

      resultingReport[element.name]["totalSales"] += salesSum; //~~~~~~~~

      resultingReport[element.name]["totalTaxes"] += calculateSalesTax(salesSum, salesTaxRates[element.province]);

      // resultingReport[element.name] = {
      //   totalSales: resultingReport[element.name]["totalSales"] += salesSum,
      //   totalTaxes: resultingReport[element.name]["totalTaxes"] += calculateSalesTax(salesSum, salesTaxRates[element.province])
      // }

    }

  });

  return resultingReport;
}

var results = salesTaxReport(companySalesData, salesTaxRates);
console.log(results)
