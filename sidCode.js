var data = [
  {
    industryName: 'Crypto',
    id: '234',
    choices: [
      {
        id: 'DO',
        recommendation: 'MUST-HAVE', // ["MUST-HAVE", "GOOD-TO_HAVE", "NO"],
        funding: [
          {
            category: 'seriesA',
            sumInsured: 500000,
            price: 1000,
          },
          {
            category: 'seriesB',
            sumInsured: 600000,
            price: 1000,
          },
          {
            category: 'seriesC',
            sumInsured: 100000,
            price: 1000,
          },
        ],
        revenue: [
          {
            category: '100000',
            sumInsured: 100000,
            price: 1000,
          },
          {
            category: '200000',
            sumInsured: 200000,
            price: 1000,
          },
          {
            category: '300000',
            sumInsured: 300000,
            price: 1000,
          },
        ],
      },
    ],
  },
];

function getEstimate({ industryId, fundingCategory, revenueCategory }) {
  var industryData = data.find(({ id }) => id === industryId);

  var estimateItems = industryData.choices.map(({ id, recommendation, funding, revenue }) => {
    var fundingSI = funding.find(({ category }) => category === fundingCategory);
    var revenueSI = revenue.find(({ category }) => category === revenueCategory);
    var estimate = fundingSI.sumInsured > revenueSI.sumInsured ? fundingSI : revenueSI;
    return {
      isSelected: ['MUST-HAVE', 'GOOD-HAVE'].includes(recommendation),
      estimate,
      id,
    };
  });
  return { industryId, estimateItems };
}

getEstimate({
  industryId: '234',
  fundingCategory: 'seriesB',
  revenueCategory: '300000',
}); //?
/**
 * estimate: {
 *  industry: ""
 * }
 */
