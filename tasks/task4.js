function getSpotlightPositionCount(scene) {
  let resultsCount = 0;

  for (let i = 0; i < scene.length; i++) {
    for (let j = 0; j < scene[i].length; j++) {
      if (
        !scene[i][j] &&
        (lookUp(scene, i, j) ||
          lookDown(scene, i, j) ||
          lookLeft(scene, i, j) ||
          lookRight(scene, i, j))
      ) {
        resultsCount++;
      }
    }
  }

  return resultsCount;
}

module.exports = getSpotlightPositionCount;

function lookUp(array, x, y) {
  for (let i = x; i >= 0; i--) {
    const position = array[i][y];

    if (position) {
      return true;
    }
  }

  return false;
}

function lookDown(array, x, y) {
  const rows = array.length;

  for (let i = x; i < rows; i++) {
    const position = array[i][y];

    if (position) {
      return true;
    }
  }

  return false;
}

function lookLeft(array, x, y) {
  for (let i = y; i >= 0; i--) {
    const position = array[x][i];

    if (position) {
      return true;
    }
  }

  return false;
}

function lookRight(array, x, y) {
  const columns = array[0].length;

  for (let i = y; i < columns; i++) {
    const position = array[x][i];

    if (position) {
      return true;
    }
  }

  return false;
}
