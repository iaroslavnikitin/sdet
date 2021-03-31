function powerOf2(n) {
  let k = 0;
  while (n !== (2 ** k)) {
    k++;
  }
  return k;
}
console.log(powerOf2(1)); // должна возвратить 0 : так как 1 =  2 ** 0
console.log(powerOf2(2)); // должна возвратить 1 : так как 2 =  2 ** 1
console.log(powerOf2(3)); // должна возвратить 2 : так как 4 =  2 ** 2
console.log(powerOf2(32)); // должна возвратить 5 : так как 32 = 2 ** 5