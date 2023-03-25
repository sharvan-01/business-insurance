//[DO NOT DELETE] //finding the largest sumInsured between the recommended plans
recommendedPlans.forEach((recoPlan) => {
  console.log('this is reco plan ' + recoPlan);
  if (element[0] === recoPlan) {
    console.log(element[1]);
    findTheLargestSumInsured(element[1]);
    //we have successfully retrieved an element that had a recommendation of must_have
    //we
  }
});
