function getTShirtSolution(tShirts, requests) {
  const tShirtSizes = Object.keys(tShirts);

  if (
    !isValidTShirtsSizes(tShirtSizes, requests) ||
    !validateRequests(tShirtSizes, requests)
  ) {
    return null;
  }

  const options = getAllOptions(requests);

  for (const option of options) {
    const keys = Object.keys(option);

    if (keys.every((key) => tShirts[key] - option[key] >= 0)) {
      return option;
    }
  }

  return null;
}

module.exports = getTShirtSolution;

function isValidTShirtsSizes(tShirtSizes, requests) {
  if (!Array.isArray(tShirtSizes) && !Array.isArray(requests)) {
    return false;
  }

  const flatRequests = requests.flat();

  return flatRequests.every((value) => tShirtSizes.includes(value));
}

function validateRequests(tShirtSizes, requests) {
  for (const request of requests) {
    if (!validateRequestSize(request)) {
      return false;
    }
    for (let i = 0; i < request.length - 1; i++) {
      const current = request[i];
      const next = request[i + 1];

      if (
        Math.abs(tShirtSizes.indexOf(current) - tShirtSizes.indexOf(next)) !== 1
      ) {
        return false;
      }
    }
  }

  return true;
}

function validateRequestSize(request, maxSizesPerRequest = 2) {
  return (
    Array.isArray(request) &&
    request.length > 0 &&
    request.length <= maxSizesPerRequest
  );
}

function getAllOptions(requests) {
  const oneSizes = requests.filter((request) => request.length === 1);
  const multipleSizes = requests.filter((request) => request.length > 1);
  const oneSizesCounts = {};

  oneSizes.forEach(
    (size) => (oneSizesCounts[size] = (oneSizesCounts[size] || 0) + 1)
  );

  const result = [[oneSizesCounts]];

  for (const sizeGroup of multipleSizes) {
    const options = [];
    for (const lastOption of result[result.length - 1]) {
      for (const size of sizeGroup) {
        const newOption = { ...lastOption };

        newOption[size] = (newOption[size] || 0) + 1;

        options.push(newOption);
      }
    }
    result.push(options);
  }

  return result[result.length - 1];
}
