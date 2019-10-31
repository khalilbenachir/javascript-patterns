function mergeSort(m) {
  if (m.length <= 1) return m;
  let left = [];
  let right = [];
  m.forEach((x, i) => {
    i < m.length / 2 ? left.push(x) : right.push(x);
  });
  left = mergeSort(left);
  right = mergeSort(right);
  return merge(left, right);
}

function merge(a, b) {
  let sortedArray = [];

  while (a.length > 0 && b.length > 0) {
    if (a[0] > b[0]) {
      sortedArray.push(b.shift());
    } else {
      sortedArray.push(a.shift());
    }
  }

  a.forEach(el => sortedArray.push(el));
  b.forEach(el => sortedArray.push(el));

  return sortedArray;
}

console.log(mergeSort([10, 9, 8, 7, 5, 4, 3, 2, 1]));

module.exports = mergeSort;
