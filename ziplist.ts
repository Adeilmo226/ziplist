function zipList(list1: (string | number)[], list2: (string | number)[]): (string | number)[] {
  const finallist: (string | number)[] = [];
  for (let i = 0; i < list1.length; i++) {
    finallist.push(list1[i]);
    finallist.push(list2[i]);
  }
  return finallist;
}

console.log(zipList(['a', 'b', 'c'], [1, 2, 3]));
