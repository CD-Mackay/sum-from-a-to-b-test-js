
function sum(fromN, toN) {
  if (fromN === toN) {
    return fromN;
  } else {
    return fromN + sum(fromN + 1, toN);
  }
}

module.exports = sum;

// 3 , 7
3, 4, 5, 6, 7
25;

