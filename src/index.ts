const id = 1;
const api = new URL(`https://x8ki-letl-twmt.n7.xano.io/api:MR0gzHqf/industry?id=${id}`);
let dataARR;
//at this point we have all the products related to the users industry
async () => {
  const response = await fetch(api);
  const data = await response.json();
  const recommendedPlans = [];
  dataARR = Object.entries(data);
};

//iterating through all the products
dataARR.forEach((element) => {
  //finding all elements that have a recommendation of must_have and pushing into an array
  if (element[1].Recommendation === 'must_have') {
    recommendedPlans.push(element[0]); //[cgl]
    findTheLargestSumInsured(element[1]); //sending the entire product data to findTheLargestSumInsured()
  }

  function findTheLargestSumInsured(product) {
    const fundingSI = product.fundingJSON.find(({ category }) => category === 'Seed'); //you will have to receive which funding category they chose over here
    const revenueSI = product.revenueJSON.find(
      ({ category }) => category === '100000000000-250000000000' || '250cr' //you will have to receive which revenue category they chose over here
    );
    const estimate = fundingSI.sumInsured > revenueSI.sumInsured ? fundingSI : revenueSI; //finding the largest SI for this particular product
    console.log('the sum insured is: ' + estimate.sumInsured);
    console.log('the price is: ' + estimate.price);
  }
});
