function filterApiData(apiData, mandatoryKeys) {
  // Add you solution here
  return apiData.filter((obj) => {
    for (let i = 0; i < mandatoryKeys.length; i++) {
      if (!obj.hasOwnProperty(mandatoryKeys[i])) {
        return false;
      }
    }
    return true;
  });
}

const data1 = [{ id: 1, price: 100 }, { price: 50 }];
const filteredData1 = filterApiData(data1, ["id"]);
console.log(filteredData1); // [{id: 1, price: 100}]
