const discWeights = [
  0.5, 1, 2.5, 4.53592, 5, 10, 11.3398, 15, 15.8757, 20, 20.4117, 25,
];
const barWeight = 20;
const maxDiscsPerSide = 12;
const disksPerBar = 2;

function getMinNextWeight(maxRecord) {
  const discCombinations = generateCombinations(discWeights, maxDiscsPerSide);

  let minNextWeight = Infinity;
  for (const combination of discCombinations) {
    const weight = calculateWeight(combination);

    if (weight > maxRecord && weight < minNextWeight) {
      minNextWeight = weight;
    }
  }

  return +minNextWeight.toFixed(2);
}

module.exports = getMinNextWeight;

function generateCombinations(arr, maxCount) {
  const results = [];
  const backtrack = (currCombination, remainingCount, startIndex) => {
    if (remainingCount === 0) {
      results.push(currCombination.slice());
      return;
    }
    for (let i = startIndex; i < arr.length; i++) {
      currCombination.push(arr[i]);
      backtrack(currCombination, remainingCount - disksPerBar, i);
      currCombination.pop();
    }
  };

  for (let count = disksPerBar; count <= maxCount; count += disksPerBar) {
    backtrack([], count, 0);
  }
  return results;
}

function calculateWeight(discs) {
  return barWeight + discs.reduce((sum, disc) => sum + disc * disksPerBar, 0);
}
